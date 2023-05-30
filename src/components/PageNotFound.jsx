export function PageNotFound() {
  return (
    <>
      <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-purple sm:text-5xl'>
            Unauthorized
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            Sorry, we couldn't find the page you're looking for.
          </p>

          <div className='mt-10 flex justify-center'>
            <a href='/' className='text-sm font-semibold leading-6 text-orange'>
              <span aria-hidden='true'>&larr;</span>
              Back to home
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
