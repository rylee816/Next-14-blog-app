import {Post, User} from './models'
import { connectToDB } from './utils'
import {unstable_noStore as noStore} from 'next/cache'

export const getPosts = async (id = null) => {
    try{
        connectToDB()
        const posts = id ? await Post.find({userId: id}) : await Post.find()
        return posts
    } catch(err){
        console.log(err)
        throw new Error("Error getting posts")
    }
}

export const getPost = async (slug) => {
    try{
        connectToDB()
        const post = await Post.findOne({slug})
        return post
    } catch(err){
        console.log(err)
        throw new Error("Error getting post")
    }
}

export const getUsers = async () => {
    try{
        connectToDB()
        const users = await User.find()
        return users
    } catch(err){
        console.log(err)
        throw new Error("Error getting users")
    }
}

export const getUser = async (id) => {
    noStore()
    try{
        connectToDB()
        const user = await User.findById(id)
        return user
    } catch(err){
        console.log(err)
        throw new Error("Error getting user")
    }
}
