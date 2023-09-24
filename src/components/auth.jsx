import React from 'react'
import { auth,googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword,signInWithPopup,signOut } from 'firebase/auth'
import { useState } from 'react'
const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const SignIn=async()=>{
    try{

      await createUserWithEmailAndPassword(auth,email,password)
    }catch(err){
      console.error(err)
    }

  }

  const SignInWithGoogle=async()=>{
    try{

      await signInWithPopup(auth,googleProvider)
    }catch(err){
      console.error(err)
    }

  }

  const logout=async()=>{
    try{
      await signOut(auth)
    }catch(err){
      console.error(err)
    }
  }
  console.log(auth?.currentUser?.email)

  return (
    <div className='auth'>
      <div className='input'>
        <label >Email:

      <input value={email} onChange={(e)=>setEmail(e.target.value)} className='input-1' type="email" placeholder='Email...' />
        </label>
        <label >Password:

      <input value={password} onChange={(e)=>setPassword(e.target.value)} className='input-2' type="password" placeholder='password...' />
        </label>
      </div>
      <div className='btn'>
      <button onClick={SignIn} className='btn-1 b1' >Login</button>
      <button onClick={SignInWithGoogle} className='btn-1 b2'> Sign In with Google</button>

      </div>
      <div className='btn'>
        <button onClick={logout} className='btn-1' >Log Out</button>
      </div>
    </div>
  )
}

export default Auth