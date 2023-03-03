import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getSession, useSession, signOut } from 'next-auth/react'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

const SignOut = () => {
  const { data: session, status } = useSession()
  const [content, setContent] = useState()
  return (
    <>
      <Head>
        <title>Sign out - Heirloomd</title>
      </Head>
      <AuthLayout
        title='Sign out of account'
        subtitle={
          <>
            <Link href='/signOut' className='text-cyan-600'>
              Sign out
            </Link>{' '}
          </>
        }>
        <form>
          <Button
            type='submit'
            color='cyan'
            className='mt-8 w-full'
            href='/SignIn'
            onClick={() => signOut()}>
            Sign out
          </Button>
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
        destination: '/SignIn',
      },
    }
  }

  return {
    props: { session },
  }
}
