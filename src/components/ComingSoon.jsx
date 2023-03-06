import { Container } from '@/components/Container'

export function ComingSoon() {
  return (
    <div>
      <div className='overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36'>
        <Container>
          <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
            <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
              <h1 className='text-4xl font-medium tracking-tight text-gray-900'>
                Heirloomd
              </h1>
              <p className='mt-6 text-lg text-gray-600'>Coming soon...</p>
            </div>
          </div>
        </Container>
      </div>
      <div className='position: fixed bottom-0 w-screen border-t border-gray-200 pt-6 pb-6 md:flex-row-reverse md:justify-between md:pt-6'>
        <p className='float-right  mt-0 mr-3 text-sm text-gray-500 md:mt-0'>
          &copy; Copyright {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  )
}
