import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

import { Container } from '@/components/Container'

import {
  CheckIcon,
  ChevronUpDownIcon,
  PhotoIcon,
} from '@heroicons/react/20/solid'

const people = [
  { id: 1, name: 'Art' },
  { id: 2, name: 'Collectibles/Memorabilia' },
  { id: 3, name: 'Decor' },
  { id: 4, name: 'Books' },
  { id: 5, name: 'Dining' },
  { id: 6, name: 'Electronics' },
  { id: 7, name: 'Frames' },
  { id: 8, name: 'Furniture' },
  { id: 9, name: 'Hardware' },
  { id: 10, name: 'Jewelry' },
  { id: 11, name: 'Kitchen' },
  { id: 12, name: 'Lighting' },
  { id: 13, name: 'Music' },
  { id: 14, name: 'Outdoor' },
  { id: 15, name: 'Rugs' },
  { id: 16, name: 'Servingware' },
  { id: 17, name: 'Other' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function SearchForm() {
  const [selected, setSelected] = useState(people[3])
  return (
    <Container className='my-10'>
      <form>
        <div className='space-y-12'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3'>
            <div>
              <h2 className='text-base font-semibold leading-7 text-purple'>
                Antique Search
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                To get the best search results, please complete each section of
                the search form.
              </p>
            </div>

            <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2'>
              <div className='col-span-full'>
                <label
                  htmlFor='about'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Description
                </label>
                <div className='mt-2'>
                  <textarea
                    id='about'
                    name='about'
                    rows={3}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                  />
                </div>
                <p className='mt-3 text-sm leading-6 text-gray-600'>
                  Provide a detailed description of the item.
                </p>
              </div>

              <div className='col-span-full'>
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className='block text-sm font-medium leading-6 text-gray-900'>
                        Category
                      </Listbox.Label>
                      <div className='relative mt-2'>
                        <Listbox.Button className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                          <span className='block truncate'>
                            {selected.name}
                          </span>
                          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                            <ChevronUpDownIcon
                              className='h-5 w-5 text-gray-400'
                              aria-hidden='true'
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave='transition ease-in duration-100'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'>
                          <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                            {people.map((person) => (
                              <Listbox.Option
                                key={person.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? 'bg-indigo-600 text-white'
                                      : 'text-gray-900',
                                    'relative cursor-default select-none py-2 pl-3 pr-9',
                                  )
                                }
                                value={person}>
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'block truncate',
                                      )}>
                                      {person.name}
                                    </span>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? 'text-white'
                                            : 'text-indigo-600',
                                          'absolute inset-y-0 right-0 flex items-center pr-4',
                                        )}>
                                        <CheckIcon
                                          className='h-5 w-5'
                                          aria-hidden='true'
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>

              <div className='col-span-full'>
                <label
                  htmlFor='cover-photo'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Photo
                </label>
                <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                  <div className='text-center'>
                    <PhotoIcon
                      className='mx-auto h-12 w-12 text-gray-300'
                      aria-hidden='true'
                    />
                    <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'>
                        <span>Upload a file</span>
                        <input
                          id='file-upload'
                          name='file-upload'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs leading-5 text-gray-600'>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <a href='/' className='text-sm font-semibold leading-6 text-gray-900'>
            Cancel
          </a>
          <button
            type='submit'
            className='rounded-md bg-orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange'>
            Search
          </button>
        </div>
      </form>
    </Container>
  )
}
