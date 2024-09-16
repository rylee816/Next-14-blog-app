"use server"

import { NextResponse } from "next/server"
import { connectToDB } from "./utils"
import { User } from "./models"

export const createUser = async (formData) => {
    const {name, username, email, image, password} = Object.fromEntries(formData)
    try {
        connectToDB()
        const newUser = new User({name, username, email, image, password})
        await newUser.save()
        console.log("User successfully created")
    } catch(err){
        console.log(err)
        return { error: 'Error creating user', status: 500 }
    }
}