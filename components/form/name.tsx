import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { nameSchema } from 'lib/schemas/contact-form-schema'
import { useInput } from 'lib/hooks/use-input'
import Input from './input'
import { useFormContext } from './form-submit'

export default function Name() {
  const { isSuccess: isFormSuccess } = useFormContext()
  const { inputProps, errors, hasErrors, isSuccess } = useInput({
    baseValue: '',
    type: 'text',
    schema: nameSchema,
    placeholder: 'Escribe aquí tu nombre y apellido',
    reset: isFormSuccess
  })

  return (
    <div className='block w-full'>
      <label htmlFor='name' className='mb-2 block text-sm'>
        Nombre y apellido *
      </label>
      <Input
        id='name'
        name='name'
        {...inputProps}
        invalid={hasErrors}
        valid={isSuccess}
      />
      <p
        className='mt-1 min-h-[16px] text-xs text-red-500'
        id='name-input-error'
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
