import React from 'react'
import Image from 'next/image'
import Styles from './postUser.module.css'
import { getUser } from '@/lib/data'

export default async function PostUser({userId}) {
    // await new Promise(res => setTimeout(res, 3000))
    const user = await getUser(userId)
    return (
        <div className={Styles.userInfo}>
            <div className={Styles.userPhoto}>
                <Image
                    src={user?.image ? user.image : 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800'}
                    alt=""
                    fill
                    sizes="100%"
                />
            </div>
            <div className={Styles.userName}>
                <p>Author</p>
                <h4>{user?.username}</h4>
            </div>
            <div className={Styles.date}>
                <p>Date Posted</p>
                <h4>{new Date(Date.parse(user?.createdAt)).toLocaleDateString('en-US')}</h4>
            </div>
        </div>
    )
}
