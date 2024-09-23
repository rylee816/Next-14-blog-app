import React from 'react'
import Styles from './blog.module.css'
import PostCard from '@/components/postCard/PostCard'
import {getPosts} from '../../lib/data'

export const metadata = {
  title: "Blog Page",
  description: "Randy Riley's Web Developer Blog Page",
};



export default async function Blog() {
 const posts = await getPosts()
  return (
        <div className={`wrapper ${Styles.blog}`}>
      {posts.map(post => <PostCard key={post.id} post={post}/>)}
    </div>
  )
}
