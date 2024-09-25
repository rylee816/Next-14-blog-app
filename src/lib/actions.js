'use server'

import { connectToDB } from './utils'
import { Post, User } from './models'
import { revalidatePath } from 'next/cache'
import { signIn, signOut } from './auth'
import bcrypt from 'bcryptjs'


export const login = async (_, formData) => {
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

  export const addUser = async (_, formData) => {
    const {name, username, email, image, password, isAdmin} = Object.fromEntries(formData)
    try {
        connectToDB()
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = {
            name,
            username,
            email,
            image,
            password: hashedPassword,
            isAdmin
        }
        const newUser = await User.create(user)
        await newUser.save()
        revalidatePath('/admin')
        console.log("Success creating new user!")
        return {success: true}
    } catch (err){
        return { error: 'Error creating user', status: 500 }
    } 
  }

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

export const createPost = async (_, formData) => {
    const { title, body, image, slug, userId } = Object.fromEntries(formData)
    const proxyImage = 'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    
    // Validate the image URL
    const isValidUrl = (url) => {
        try {
            const parsedUrl = new URL(url);
            return parsedUrl.protocol === 'https:' && url.includes('.');
        } catch (err) {
            return false;
        }
    };

    // Use proxy image if the provided image URL is invalid
    const imageUrl = isValidUrl(image) ? image : proxyImage;
    try {
        connectToDB()
        const newPost = new Post({
            title,
            body,
            image: imageUrl,
            slug: slug.replace(' ', ''),
            userId,
        })
        await newPost.save()
        console.log('Post successfully created')
        revalidatePath('/blog')
        revalidatePath('/admin')
        return {success: true, message: 'Post successfully created!'}
    } catch (err) {
        console.log(err)
        return { error: 'Error creating post', status: 500 }
    }
}

export const deletePost = async (formData) => {
    const id = formData.get('id')
    try {
        connectToDB()
        await Post.findByIdAndDelete(id)
        console.log('Post successfully deleted')
        revalidatePath('/admin')
    } catch (err) {
        console.log(err)
        return { error: 'Error deleting post', status: 500 }
    }
}

export const deleteUser = async (formData) => {
    const id = formData.get("id")
    try {
        connectToDB()
        await User.findByIdAndDelete(id)
        console.log('User successfully deleted')
        revalidatePath('/admin')
        return {success: true}
    } catch (err) {
        console.log(err)
        return { error: 'Error deleting user', status: 500 }
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
