import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { useFormContext } from './form-submit'

export default function Alert() {
  const { isError, isSuccess, isExist } = useFormContext()

  return (
    <>
      <Transition
        as={Fragment}
        show={isExist}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-0'
        leaveFrom='opacity-0'
        leaveTo='opacity-0'
        unmount
      >
        <div className='mt-6 w-full'>
          <div
            className='mb-4 rounded-lg bg-yellow-100 p-4 text-sm text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800'
            role='alert'
          >
            <span className='mr-1 font-medium'>¡Ya estás registrado!</span>
            Si necesitas más información, contáctanos por los otros medios.
          </div>
        </div>
      </Transition>

      <Transition
        as={Fragment}
        show={isSuccess}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-0'
        leaveFrom='opacity-0'
        leaveTo='opacity-0'
        unmount
      >
        <div className='mt-6 w-full'>
          <div
            className='rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800'
            role='alert'
          >
            <span className='mr-1 font-medium'>¡Formulario enviado!</span>
            Pronto nos contactaremos.
          </div>
        </div>
      </Transition>

      <Transition
        as={Fragment}
        show={isError}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-0'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        unmount
      >
        <div className='mt-6 w-full'>
          <div
            className='rounded-lg bg-red-100 p-4 text-sm text-red-700 dark:bg-red-200 dark:text-red-800'
            role='alert'
          >
            <span className='mr-1 font-medium'>
              ¡Error al enviar el formulario!
            </span>
            Por favor inténtalo nuevamente.
          </div>
        </div>
      </Transition>
    </>
  )
}
