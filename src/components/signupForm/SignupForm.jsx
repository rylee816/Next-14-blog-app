'use client'
import React from 'react'
import Styles from './signupForm.module.css'
import { createUser } from '@/lib/actions'

export default function SignupForm() {

    return (
        <div className={Styles.signup}>
            <form className={Styles.signupForm} action={createUser}>
                <input
                    className={Styles.input}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                />
                <input
                    className={Styles.input}
                    type="text"
                    id="username"
                    name="username"
                    placeholder="User Name"
                />
                <input
                    className={Styles.input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
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
                />
                <input
                    className={Styles.input}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password (Must match password)"
                />
            <div className={Styles.submitBtn}>
                <button className={Styles.btn}>
                    Sign Up
                </button>
            </div>
            </form>
        </div>
    )
}
