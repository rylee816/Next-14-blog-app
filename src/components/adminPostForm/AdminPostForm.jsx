'use client'
import { createPost } from '@/lib/actions'
import React from 'react'
import { useFormState } from 'react-dom'
import Styles from './adminPostForm.module.css'

export default function AdminPostForm({ userId }) {
    const [_, formAction] = useFormState(createPost, undefined)

    return (
        <div className={Styles.adminPostForm}>
            <form className={Styles.adminPost} action={formAction}>
                <input className={Styles.input} type="text" name="title" placeholder="Title" />
                <input className={Styles.input} type="text" name="slug" placeholder="Slug" />
                <input className={Styles.input} type="text" name="image" placeholder="Image" />
                <input className={Styles.input} type="hidden" name="userId" value={userId} />
                <textarea className={Styles.input}
                    type="text"
                    name="body"
                    placeholder="Body"
                    rows={10}
                />
                <div className={Styles.submitBtn}>
                <button className={Styles.btn}>Create Post</button>

                </div>
            </form>
        </div>
    )
}
