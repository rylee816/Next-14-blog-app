import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { connectToDB } from './utils'
import { User } from './models'

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
        })
    ],
    callbacks: {
       async signIn({account, profile}){
            if(account.provider === "github"){
                connectToDB()
                try {
                   const user = await User.findOne({email: profile.email})
                    if (!user) {
                        const newUser = new User({
                            name: profile.name,
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url
                        })
                        await newUser.save()
                    }
                } catch(err){
                    console.log(err)
                    return false
                }
            }
            return true
       }
    }
})
