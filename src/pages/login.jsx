import Head from 'next/head'
import Link from 'next/link'
// import { useSession, signIn } from "next-auth/react"

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'


export default function Login() {
  // const [loading] = useSession() //session

  // if (loading) {
  //   return <div>Loading</div>
  // }
  return (
    <>
      <Head>
        <title>Sign In - Heirloomd</title>
      </Head>
      <AuthLayout
        title='Sign in to account'
        subtitle={
          <>
            Don’t have an account?{' '}
            <Link href='/register' className='text-cyan-600'>
              Sign up
            </Link>{' '}
          </>
        }>
        <form>
          <div className='space-y-6'>
            <TextField
              label='Email address'
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
            />
            <TextField
              label='Password'
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
            />
          </div>
          <Button type='submit' color='cyan' className='mt-8 w-full' onClick={() => signIn()}>
            Sign in
          </Button>
        </form>
        <Button type='submit' color='cyan' className='mt-8 w-full' onClick={() => signIn('google')}>
            Sign in with Google
          </Button>
      </AuthLayout>
    </>
  )
}
