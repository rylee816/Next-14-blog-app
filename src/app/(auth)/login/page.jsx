
import Styles from './loginPage.module.css'
import React from 'react'
import { handleGitHubLogin } from '@/lib/actions'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import LoginForm from '@/components/loginForm/LoginForm'

export default async function LoginPage() {
  // const session = await auth()
  
  // if(session){
  //   redirect('/')
  // }

    return (
        <div className={`wrapper ${Styles.loginPage}`}>
            <form action={handleGitHubLogin}>
                <button>Sign in with GitHub</button>
            </form>
            <LoginForm />
        </div>
    )
}
