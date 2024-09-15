import React from 'react'
import Styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default async function PostCard({ post }) {
    
    return (
        <div className={Styles.postCard}>
            <div className={Styles.top}>
                <div className={Styles.imageContainer}>
                    <Image
                        className={Styles.img}
                        src={post.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <span className={Styles.date}>{new Date(Date.parse(post.createdAt)).toLocaleDateString('en-US')}</span>
            </div>
            <div className={Styles.body}>
                <div className={Styles.titleContainer}>
                    <h4>{post.title}</h4>
                </div>
                <p className={Styles.description}>{post.body}</p>
                <Link href={`/blog/${post.slug}`}>See More</Link>
            </div>
        </div>
    )
}
