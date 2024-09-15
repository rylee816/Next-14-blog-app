import React, {Suspense} from 'react'
import Styles from './viewPost.module.css'
import Image from 'next/image'
import PostUser from '@/components/PostUser/PostUser'

async function getPostData(slug) {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${slug}`
        )
        return res.json()
    } catch (err) {
        throw new Error('Error retrieving post')
    }
}

export default async function ViewPost({ params }) {
    const { slug } = params
    const post = await getPostData(slug)

    return (
        <div className={`wrapper ${Styles.viewPost}`}>
            <div className={Styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    fill
                />
            </div>
            <div className={Styles.textContainer}>
                <h1 className={Styles.title}>{post.title}</h1>
                <Suspense fallback={"...Loading"}>
                    <PostUser userId={post.userId} />
                </Suspense>
                <p className={Styles.text}>{post.body.repeat(20)}</p>
            </div>
        </div>
    )
}
