'use client'
import { createPost } from '@/lib/actions'
import React from 'react'
import { useFormState } from 'react-dom'

export default function AdminPostForm({ userId }) {
    console.log(userId)
    const [_, formAction] = useFormState(createPost, undefined)

    return (
        <div className="adminPost">
            <form action={formAction}>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="slug" placeholder="Slug" />
                <input type="text" name="image" placeholder="Image" />
                <input type="hidden" name="userId" value={userId} />
                <input
                    type="textarea"
                    name="body"
                    placeholder="Body"
                    rows={10}
                />
                <button>Create Post</button>
            </form>
        </div>
    )
}
