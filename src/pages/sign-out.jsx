import Head from 'next/head'
import { getSession, signOut } from 'next-auth/react'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'

const SignOut = () => {
  return (
    <>
      <Head>
        <title>Sign out - Heirloomd</title>
      </Head>
      <AuthLayout title='Sign out of account'>
        <form className='space-y-5'>
          <Button
            type='submit'
            className='w-full bg-purple hover:bg-medPurple active:bg-lightPurple'
            href='/sign-in'
            onClick={() => signOut('google')}>
            Sign out
          </Button>
          <div className='w-full text-center'>
            <a href='/' className='leading-6 text-purple'>
              Back to home
            </a>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}

export default SignOut

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/coming-soon',
      },
    }
  }

  return {
    props: { session },
  }
}
