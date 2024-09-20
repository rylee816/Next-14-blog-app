'use server'

import { NextResponse } from 'next/server'
import { connectToDB } from './utils'
import { User } from './models'
import { revalidatePath } from 'next/cache'
import { signIn, signOut } from './auth'
import bcrypt from 'bcryptjs'


export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
    try {
      await signIn("credentials", { username, password })
    } catch (err) {
      console.log(err);
  
      if (err.message.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
  };

export const register
 = async (_, formData) => {
    const { name, username, email, image, password, confirmPassword } =
        Object.fromEntries(formData)

        if (password !== confirmPassword) {
            return { error: "Passwords do not match" };
          }
        
    try {
        connectToDB()

        const user = await User.findOne({username})
        if(user){
            return {error: "Username already exists"}
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({ name, username, email, image, password: hashedPassword })
        await newUser.save()
        console.log('User successfully created')
        return {success: true}
    } catch (err) {
        console.log(err)
        return { error: 'Error creating user', status: 500 }
    }
}

export const createPost = async (formData, userId) => {
    const { title, body, image, slug } = Object.fromEntries(formData)
    try {
        connectToDB()
        const newPost = new Post({
            title,
            body,
            image: image ?? undefined,
            slug,
            userId,
        })
        await newPost.save()
        console.log('Post successfully created')
        revalidatePath('/blog')
    } catch (err) {
        console.log(err)
        return { error: 'Error creating post', status: 500 }
    }
}

export const deletePost = async (id) => {
    try {
        connectToDB()
        await Post.findByIdAndDelete(id)
        console.log('Post successfully deleted')
        revalidatePath('/blog')
    } catch (err) {
        console.log(err)
        return { error: 'Error deleting post', status: 500 }
    }
}

export const handleGitHubLogin = async () => {
    'use server'
    await signIn('github')
}


export const handleLogout = async () => {
    'use server'
    await signOut()
}
