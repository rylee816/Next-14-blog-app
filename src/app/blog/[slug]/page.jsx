import React, {Suspense} from 'react'
import Styles from './viewPost.module.css'
import Image from 'next/image'
import PostUser from '@/components/PostUser/PostUser'
import { getPost } from '@/lib/data'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'


export const generateMetadata = async ({params}) => {
  const session = await auth()
//   if(!session){
//     redirect('/')
//   }
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
                    src={post?.image || 'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                    alt=""
                    fill
                />
            </div>
            <div className={Styles.textContainer}>
                <h1 className={Styles.title}>{post?.title}</h1>
                <Suspense fallback={"...Loading"}>
                    <PostUser userId={post?.userId} />
                </Suspense>
                <p className={Styles.text}>{post?.body}</p>
            </div>
        </div>
    )
}
