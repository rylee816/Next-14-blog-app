import React from 'react'

export default function ViewPost({params}) {
  const post = params.slug
  return (
    <div>ViewPost {post}</div>
  )
}
