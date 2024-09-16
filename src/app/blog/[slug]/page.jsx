import React, {Suspense} from 'react'
import Styles from './viewPost.module.css'
import Image from 'next/image'
import PostUser from '@/components/PostUser/PostUser'
import { getPost } from '@/lib/data'

export const generateMetadata = async ({params}) => {
  const {slug} = params;
  const post = await getPost(slug)

  return {
    title: post.title,
    description: post.body
  }
}


export default async function ViewPost({ params }) {
    const { slug } = params
    const post = await getPost(slug)
    return (
        <div className={`wrapper ${Styles.viewPost}`}>
            <div className={Styles.imgContainer}>
                <Image
                    src={post?.image && post.image}
                    alt=""
                    fill
                />
            </div>
            <div className={Styles.textContainer}>
                <h1 className={Styles.title}>{post.title}</h1>
                <Suspense fallback={"...Loading"}>
                    <PostUser userId={post.userId} />
                </Suspense>
                <p className={Styles.text}>{post.body}</p>
            </div>
        </div>
    )
}
