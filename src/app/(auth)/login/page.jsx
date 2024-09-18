import React from 'react'
import { handleGitHubLogin } from '@/lib/actions'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const session = await auth()
  
  if(session){
    redirect('/')
  }

    return (
        <div>
            <form action={handleGitHubLogin}>
                <button>Sign in with GitHub</button>
            </form>
        </div>
    )
}
