import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDB } from './utils'
import { User } from './models'
import bcrypt from 'bcryptjs'

export const login = async (credentials) => {
    try {
        connectToDB()
        const user = await User.findOne({ username: credentials.username })
        if (!user) {
            throw new Error('Incorrect username or password. Please try again')
        }
        const validatedPassword = await bcrypt.compare(credentials.password, user.password)
        console.log(validatedPassword, 'PASSSSSS')
        if (!validatedPassword) {
            throw new Error('Incorrect password. Please try again')
        }
        user.username = credentials.username
        return user
    } catch (err) {
        console.log(err)
        throw new Error('Failed to login')
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                   const user = await login(credentials)
                   return user
                } catch (err) {
                    return null
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === 'github') {
                connectToDB()
                try {
                    const user = await User.findOne({ email: profile.email })
                    if (!user) {
                        const newUser = new User({
                            name: profile.name,
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url,
                        })
                        await newUser.save()
                    }
                } catch (err) {
                    console.log(err)
                    return false
                }
            }
            return true
        },
    },
})
