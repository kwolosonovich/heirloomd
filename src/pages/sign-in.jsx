import { getSession, useSession, signIn } from 'next-auth/react'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
// import { ComingSoon } from '@/components/ComingSoon'
// import { TextField } from '@/components/Fields'
// import { Header } from '@/components/Header'

const SignIn = () => {
  const { loading } = useSession()
  if (loading) {
    return <div>Loading</div>
  }
  return (
    <>
      <AuthLayout title='Sign in to account'>
        <Button
          type='submit'
          className='w-full bg-purple hover:bg-medPurple active:bg-lightPurple'
          onClick={() => signIn('google')}>
          Sign in with Google
        </Button>
      </AuthLayout>
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
