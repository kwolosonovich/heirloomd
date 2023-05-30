import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className='bg-gray overflow-hidden py-20 shadow-gray-900/5 sm:py-32 lg:pb-32 xl:pb-36'>
      <Container>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
          <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
            <h1 className='text-4xl font-medium tracking-tight text-purple'>
              Heirloomd
            </h1>
            <p className='mt-6 text-lg text-purple'>
              Your ultimate antiquing companion
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
