import {Post} from './models'
import { connectToDB } from './utils'

export const getPosts = async () => {
    try{
        connectToDB()
        const posts = await Post.find()
        console.log(posts)
        return 
    } catch(err){
        console.log(err)
        throw new Error("Error getting posts")
    }
}

getPosts()