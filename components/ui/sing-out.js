"use client"
 
import { signOut } from "next-auth/react"
 
export function SignInButton() {
  return <button onClick={() => signOut()}>Sign in</button>
}