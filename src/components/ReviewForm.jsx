import { Fragment, useRef, useState } from 'react'
import { Dialog, Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import {
  CalendarIcon,
  PaperClipIcon,
  TagIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid'

import { TextField } from '@/components/Fields'

const assignees = [
  { name: 'Unassigned', value: null },
  {
    name: 'Wade Cooper',
    value: 'wade-cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More items...
]
const labels = [
  { name: 'Unlabelled', value: null },
  { name: 'Engineering', value: 'engineering' },
  // More items...
]
const dueDates = [
  { name: 'No due date', value: null },
  { name: 'Today', value: 'today' },
  // More items...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ReviewForm() {
  const [assigned, setAssigned] = useState(assignees[0])
  const [labelled, setLabelled] = useState(labels[0])
  const [dated, setDated] = useState(dueDates[0])

  return (
    <>
      <form action='#' className='relative -mt-10 w-full pt-0'>
        <div className='overflow-hidden rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'>
          <label htmlFor='title' className='sr-only'>
            Title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            className='block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0'
            placeholder='Title'
            required
          />
          <label htmlFor='description' className='sr-only'>
            Description
          </label>
          <textarea
            rows={2}
            name='description'
            id='description'
            className='block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
            placeholder='Write a description...'
            defaultValue={''}
            required
          />

          {/* Spacer element to match the height of the toolbar */}
          <div aria-hidden='true'>
            <div className='py-2'>
              <div className='h-9' />
            </div>
            <div className='h-px' />
            <div className='py-2'>
              <div className='py-px'>
                <div className='h-9' />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-3'>
          <TextField
            id='name'
            name='name'
            type='text'
            autoComplete='given-name'
            placeholder='Name (optional)'
          />
        </div>
        <div className='mt-7 text-center'>
          <button
            type='submit'
            className='mb-5 block w-full rounded-md bg-orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange'>
            Submit
          </button>
          <a href='/' className='text-sm font-semibold leading-6 text-gray-900'>
            Cancel
          </a>
        </div>
      </form>
    </>
  )
}
