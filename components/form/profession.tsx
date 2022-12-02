import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { professionSchema } from 'lib/schemas/contact-form-schema'
import { useInput } from 'lib/hooks/use-input'
import Input from './input'
import { useFormContext } from './form-submit'

export default function Profession() {
  const { isSuccess: isFormSuccess } = useFormContext()
  const { inputProps, errors, hasErrors, isSuccess } = useInput({
    baseValue: '',
    type: 'text',
    schema: professionSchema,
    placeholder: 'Escribe aquí tu profesión',
    reset: isFormSuccess
  })

  return (
    <div className='block w-full'>
      <label htmlFor='profession' className='mb-2 block text-sm'>
        Profesión *
      </label>
      <Input
        id='profession'
        name='profession'
        {...inputProps}
        invalid={hasErrors}
        valid={isSuccess}
      />
      <p
        className='mt-1 min-h-[16px] text-xs text-red-500'
        id='profession-input-error'
      >
        <Transition
          as={Fragment}
          show={hasErrors}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <span>
            {errors?.map((x) => (
              <span key={x}> {x}.</span>
            ))}
          </span>
        </Transition>
      </p>
    </div>
  )
}
