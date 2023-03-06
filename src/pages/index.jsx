import { useSession, signOut, getSession } from 'next-auth/react'

import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { ComingSoon } from '@/components/ComingSoon'

export default function Home() {
  const { data: session, status } = useSession({ required: true })
  return (
    <>
      {status === 'authenticated' ? (
        <>
          <Head>
            <title>Create. Inspire. Enjoy.</title>
            <meta name='description' content='Create. Inspire. Enjoy.' />
          </Head>
          <Header />
          <main>
            <Hero />
            <CallToAction />
            {/* <PrimaryFeatures /> */}
            {/* <SecondaryFeatures /> */}
            <Reviews />
            <Pricing />
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
        destination: '/sign-in',
      },
    }
  }

  return {
    props: { session },
  }
}
