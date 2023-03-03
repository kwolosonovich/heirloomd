import Head from 'next/head'
import Link from 'next/link'
import { getSession, useSession, signIn } from 'next-auth/react'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { ComingSoon } from '@/components/ComingSoon'
import { TextField } from '@/components/Fields'
import { Header } from '@/components/Header'

const SignIn = () => {
  const { data: session, status } = useSession() //{ required: false }
  const { loading } = useSession()
  if (loading) {
    return <div>Loading</div>
  }
  console.log(status)
  return (
    <>
      <Header />
      <ComingSoon />
      {/* <AuthLayout title='Sign in to account'>
        <Button
          type='submit'
          color='cyan'
          className='mt-8 w-full'
          onClick={() => signIn('google')}
          href='/'>
          Sign in with Google
        </Button>
      </AuthLayout> */}
    </>
  )
}

export default SignIn

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }

  return {
    props: { session },
  }
}
