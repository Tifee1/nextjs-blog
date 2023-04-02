import React, { useRef, useState } from 'react'

import { signIn } from 'next-auth/react'

import AuthHeader from '@/components/auth/AuthHeader'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!emailRef.current || !passwordRef.current) return

    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (!email || !email.includes('@') || !password || password.length < 6) {
      toast.error('Invalid Email Or Password Too Short')
      return
    }

    if (isLogin) {
      const response = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (response?.status !== 200) {
        toast.error(response?.error)
      } else {
        console.log('login successful')
      }
      return
    }

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!(response.status === 200)) {
      toast.error(data.message)
    } else {
      console.log(data.message)
      emailRef.current.value = ''
      passwordRef.current.value = ''
    }
  }
  return (
    <>
      <AuthHeader />
      <section className='w-[90%] max-w-md border border-black mx-auto my-12 p-8'>
        <h2 className='text-center'>{isLogin ? 'Login' : 'Register'} Page</h2>
        <form
          className='grid items-center justify-center'
          onSubmit={handleSubmit}
        >
          <div className='grid my-2'>
            <label htmlFor='email' className='mr-4'>
              Your Email:
            </label>
            <input
              type='email'
              id='email'
              ref={emailRef}
              className='bg-transparent border border-black rounded-sm p-1'
            />
          </div>
          <div className='grid my-2'>
            <label htmlFor='password' className='mr-4'>
              Your Password:
            </label>
            <input
              type='password'
              id='password'
              ref={passwordRef}
              className='bg-transparent border border-black rounded-sm p-1'
            />
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='trans bg-black text-white hover:bg-black/60 px-2 py-1 rounded-md'
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </div>
        </form>
        <div className='text-center mt-4'>
          <button className='capitalize' onClick={() => setIsLogin(!isLogin)}>
            create an account
          </button>
        </div>
      </section>
    </>
  )
}

export default LoginPage
