import React from 'react'
import Styles from './blog.module.css'
import PostCard from '@/components/postCard/PostCard'

async function getData(){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
  } catch(err){
    throw new Error("Error retrieving posts")
  }
}

export default async function Blog() {
 const posts = await getData()

  return (
    <div className={`wrapper ${Styles.blog}`}>
      {posts.map(post => <PostCard key={post.id} post={post}/>)}
    </div>
  )
}
