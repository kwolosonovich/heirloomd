import { useSession } from 'next-auth/react'

import { SearchForm } from '@/components/SearchFom'
import { Unauthorized } from '@/components/Unauthorized'

export default function Search() {
  const { data: session, status } = useSession({ required: true })
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
