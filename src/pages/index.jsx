import { useSession, signOut, getSession } from 'next-auth/react'
import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { ComingSoon } from '@/components/ComingSoon'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Plans } from '@/components/Plans'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  const { data: session, status } = useSession({ required: true })
  return (
    <>
      {status === 'authenticated' ? (
        <>
          {/* <Head>
            <title>Create. Inspire. Enjoy.</title>
            <meta name='description' content='Create. Inspire. Enjoy.' />
          </Head> */}
          <Header />
          <main>
            <Hero />
            <CallToAction />
            {/* <SecondaryFeatures /> */}
            <Plans />
            <Reviews />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <ComingSoon />
        </>
      )}
    </>
  )
}

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
