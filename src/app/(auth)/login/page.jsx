import Styles from './loginPage.module.css'
import React from 'react'
import { handleGitHubLogin } from '@/lib/actions'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import LoginForm from '@/components/loginForm/LoginForm'
import Link from 'next/link'

export default async function LoginPage() {
    return (
        <div className={`wrapper ${Styles.loginPage}`}>
            <form className={Styles.github} action={handleGitHubLogin}>
                <button className={Styles.githubBtn}>
                    Sign in with GitHub
                </button>
            </form>
            <div className={Styles.option}>
                <h2 className={Styles.or}>or</h2>
            </div>
                <LoginForm />
            <div className={Styles.register}>
                <p>Don't have an account?</p>
                <Link href="/register">
                    <i>Click Here to Register</i>
                </Link>
            </div>
        </div>
    )
}
