import React from 'react'
import Styles from './blog.module.css'
import PostCard from '@/components/postCard/PostCard'

export default function Blog() {
  return (
    <div className={`wrapper ${Styles.blog}`}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}
