import Link from 'next/link'

export function AuthLayout({ title, subtitle, children }) {
  return (
    <main className='flex min-h-full overflow-hidden sm:py-28'>
      <div className='mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6'>
        <Link href='/' aria-label='Home'></Link>
        <div className='relative mt-12 sm:mt-16'>
          <h1 className='text-center text-2xl font-medium tracking-tight text-purple'>
            {title}
          </h1>
          {subtitle && (
            <p className='mt-3 text-center text-lg text-purple'>{subtitle}</p>
          )}
        </div>
        <div className='-mx-4 mt-10 flex-auto bg-white py-10 px-4 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24'>
          {children}
        </div>
      </div>
    </main>
  )
}
