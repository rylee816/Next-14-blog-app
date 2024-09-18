'use server'

import { NextResponse } from 'next/server'
import { connectToDB } from './utils'
import { User } from './models'
import { revalidatePath } from 'next/cache'
import { redirect, useRouter } from 'next/navigation'
import { auth, signIn, signOut } from './auth'

export const createUser = async (formData) => {
    const { name, username, email, image, password } =
        Object.fromEntries(formData)
    try {
        connectToDB()
        const newUser = new User({ name, username, email, image, password })
        await newUser.save()
        console.log('User successfully created')
    } catch (err) {
        console.log(err)
        return { error: 'Error creating user', status: 500 }
    }
    redirect('/')
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
