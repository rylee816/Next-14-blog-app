'use client'
import { login } from '@/lib/actions'
import React from 'react'
import { useFormState } from "react-dom"
import Styles from './loginForm.module.css'

export default function LoginForm() {
    const [state, formAction] = useFormState(login, undefined)  

    return (
        <div>
            <form className={Styles.loginForm} action={formAction}>
                <input
                    className={Styles.input}
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />
                <input
                    className={Styles.input}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <div className={Styles.error}>{state?.error}</div>
                <div className={Styles.loginBtn}>
                    <button className={Styles.btn}>Login</button>
                </div>
            </form>
        </div>
    )
}
