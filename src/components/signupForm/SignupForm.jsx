'use client'
import React, {useEffect} from 'react'
import Styles from './signupForm.module.css'
import { register } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import {useFormState} from 'react-dom'
import Link from 'next/link'


export default function SignupForm() {
    const [state, formAction] = useFormState(register, undefined)
    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('/login')
    }, [state?.success, router])

    return (
        <div className={Styles.signup}>
            <form className={Styles.signupForm} action={formAction}>
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
                <input
                    className={Styles.input}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password (Must match password)"
                    required
                />
                <div className={Styles.error}>
                {state?.error}
                </div>
            <div className={Styles.submitBtn}>
                <button className={Styles.btn}>
                    Register
                </button>
            </div>
            <div className={Styles.login}>
                <Link href="/login">Already have an account? <b>Log in!</b></Link>
            </div>
            </form>
        </div>
    )
}
