'use client'
import { createPost } from '@/lib/actions'
import React, {useRef} from 'react'
import { useFormState } from 'react-dom'
import Styles from './adminPostForm.module.css'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function AdminPostForm({ userId }) {
    const [state, formAction] = useFormState(createPost, undefined)
    const ref = useRef()

    useEffect(() => {
        state?.success && toast.success(state.message)
    }, [state])

    return (
        <div className={Styles.adminPostForm}>
            <form
                className={Styles.adminPost}
                ref={ref}
                action={(formData) => {
                    formAction(formData)
                    ref.current?.reset()
                }}
            >
                <input
                    className={Styles.input}
                    type="text"
                    name="title"
                    placeholder="Title"
                />
                <input
                    className={Styles.input}
                    type="text"
                    name="slug"
                    placeholder="Slug"
                />
                <input
                    className={Styles.input}
                    type="text"
                    name="image"
                    placeholder="Image"
                />
                <input
                    className={Styles.input}
                    type="hidden"
                    name="userId"
                    value={userId}
                />
                <textarea
                    className={Styles.input}
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
