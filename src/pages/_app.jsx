import '@/styles/tailwind.css'
import { SessionProvider } from 'next-auth/react'
import 'focus-visible'

export default function App({ Component, session, ...pageProps }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
