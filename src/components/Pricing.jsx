import { Container } from '@/components/Container'

export function Pricing() {
  // let [activePeriod, setActivePeriod] = useState('Monthly')

  return (
    <section
      id='pricing'
      aria-labelledby='pricing-title'
      className='border-t border-gray-200 bg-gray-100 py-20 sm:py-32'>
      <Container>
        <div className='mx-auto max-w-2xl text-center'>
          <h2
            id='pricing-title'
            className='text-3xl font-medium tracking-tight text-gray-900'>
            Getting started
          </h2>
          <p className='w-50 mt-2 text-lg text-gray-600'>Coming soon...</p>
        </div>
      </Container>
    </section>
  )
}
