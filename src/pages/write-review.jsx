import { useSession } from 'next-auth/react'
import Head from 'next/head'

import { AuthLayout } from '@/components/AuthLayout'
import { ReviewForm } from '@/components/ReviewForm'
import { Unauthorized } from '@/components/Unauthorized'

export default function WriteAReview() {
  const { data: session, status } = useSession({ required: true })
  return (
    <>
      {status === 'authenticated' ? (
        <>
          <Head>
            <title>Write a review</title>
          </Head>
          <AuthLayout title='Write a review'>
            <ReviewForm />
          </AuthLayout>
        </>
      ) : (
        <Unauthorized />
      )}
    </>
  )
}
