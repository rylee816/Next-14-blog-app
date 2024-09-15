import React from 'react'
import Styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function getData(id){
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      return res.json()
    } catch(err){
      throw new Error("Error retrieving posts")
    }
  }

export default async function PostCard({ post }) {
    const image = await getData(post.id)
    // const url = image.find(post.id)
    console.log(image)
    return (
        <div className={Styles.postCard}>
            <div className={Styles.top}>
                <div className={Styles.imageContainer}>
                    <Image
                        className={Styles.img}
                        src={image[0].url}
                        alt=""
                        fill
                    />
                </div>
                <span className={Styles.date}>9/13/24</span>
            </div>
            <div className={Styles.body}>
                <div className={Styles.titleContainer}>
                    <h4>{post.title}</h4>
                </div>
                <p className={Styles.description}>{post.body}</p>
                <Link href={`/blog/${post.id}`}>See More</Link>
            </div>
        </div>
    )
}
