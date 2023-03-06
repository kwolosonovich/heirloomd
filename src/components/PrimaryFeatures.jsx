import { Container } from '@/components/Container'

export function PrimaryFeatures() {
  return (
    <section
      id='features'
      aria-label='Features for investing all your money'
      className='bg-green-600 py-20 sm:py-32'>
      <Container>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl'>
          <h2 className='text-3xl font-medium tracking-tight text-white'>
            Discover your next heirloom
          </h2>
          <p className='mt-2 text-lg text-gray-400'>
            {/* TODO: description */}
          </p>
        </div>
      </Container>
      <div className='mt-16 md:hidden'>{/* TODO: <FeaturesMobile /> */}</div>
      <Container className='hidden md:mt-20 md:block'>
        {/* TODO: <FeaturesDesktop /> */}
      </Container>
    </section>
  )
}
