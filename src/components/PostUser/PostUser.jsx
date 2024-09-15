import React from 'react'
import Image from 'next/image'
import Styles from './postUser.module.css'

async function getUserData(userId) {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        )
        return res.json()
    } catch (err) {
        throw new Error("Error retrieving user")
    }
}

export default async function PostUser({userId}) {
    // await new Promise(res => setTimeout(res, 3000))
    const user = await getUserData(userId)

    return (
        <div className={Styles.userInfo}>
            <div className={Styles.userPhoto}>
                <Image
                    src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    fill
                />
            </div>
            <div className={Styles.userName}>
                <p>Author</p>
                <h4>{user.username}</h4>
            </div>
            <div className={Styles.date}>
                <p>Date Posted</p>
                <h4>9/13/2024</h4>
            </div>
        </div>
    )
}
