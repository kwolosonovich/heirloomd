import { useSession } from 'next-auth/react'
import Head from 'next/head'

import { AuthLayout } from '@/components/AuthLayout'
import { Contact } from '@/components/Contact'
import { Unauthorized } from '@/components/Unauthorized'

export default function WriteAReview() {
  const { data: session, status } = useSession({ required: true })
  return (
    <>
      {status === 'authenticated' ? (
        <>
          <Head>
            <title>Contact us</title>
          </Head>
          <AuthLayout title='Contact us'>
            <Contact />
          </AuthLayout>
        </>
      ) : (
        <Unauthorized />
      )}
    </>
  )
}
