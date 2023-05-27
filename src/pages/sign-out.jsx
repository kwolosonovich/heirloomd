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
            <Link href='/signOut' className='text-purple'>
              Sign out
            </Link>{' '}
          </>
        }>
        <form>
          <Button
            type='submit'
            className='mt-8 w-full bg-purple hover:bg-medPurple active:bg-lightPurple'
            href='/sign-in'
            onClick={() => signOut('google')}>
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
        destination: '/coming-soon',
      },
    }
  }

  return {
    props: { session },
  }
}
