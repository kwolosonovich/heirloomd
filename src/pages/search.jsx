import { getSession, useSession } from 'next-auth/react'

import { SearchForm } from '@/components/SearchFom'
import { Unauthorized } from '@/components/Unauthorized'

export default function Search() {
  const { data: status } = useSession({ required: true })
  return (
    <>
      {status === 'authenticated' ? (
        <div>
          <SearchForm />
        </div>
      ) : (
        <>
          <Unauthorized />
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
