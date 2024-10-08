'use client'
import React, { useEffect } from 'react'
import Styles from './adminUserForm.module.css'
import { addUser } from '@/lib/actions'
import { useFormState } from 'react-dom'
import { toast } from 'react-hot-toast'
import { useRef } from 'react'

export default function AdminUserForm() {
    const [state, formAction] = useFormState(addUser, undefined)
    const ref = useRef()

    useEffect(() => {
        state?.success && toast.success('Success creating new user!')
    }, [state])

    return (
        <div className={Styles.signup}>
            <form
                className={Styles.signupForm}
                ref={ref}
                action={(formData) => {
                    formAction(formData)
                    ref.current?.reset()
                }}
            >
                <input
                    className={Styles.input}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                />
                <input
                    className={Styles.input}
                    type="text"
                    id="username"
                    name="username"
                    placeholder="User Name"
                    required
                />
                <input
                    className={Styles.input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <input
                    className={Styles.input}
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Upload Photo"
                />
                <input
                    className={Styles.input}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password (Must be at least 6 characters)"
                    required
                />
                <select
                    className={Styles.input}
                    name="isAdmin"
                    placeholder="Is Admin?"
                >
                    <option className={Styles.option} value="false">
                        Is Admin?
                    </option>
                    <option className={Styles.option} value="false">
                        No
                    </option>
                    <option className={Styles.option} value="true">
                        Yes
                    </option>
                </select>
                <div className={Styles.error}>{state?.error}</div>
                <div className={Styles.submitBtn}>
                    <button className={Styles.btn}>Create User</button>
                </div>
            </form>
        </div>
    )
}
