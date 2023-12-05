import { Fragment } from 'react'
import { useFormContext } from './form-submit'

export default function Alert() {
  const { isError, isSuccess, isExist } = useFormContext()

  return (
    <>
      {isExist && (
        <div className='mt-6 w-full'>
          <div
            className='mb-4 rounded-lg bg-yellow-100 p-4 text-sm text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800'
            role='alert'
          >
            <span className='mr-1 font-medium'>¡Ya estás registrado!</span>
            Si necesitas más información, contáctanos por los otros medios.
          </div>
        </div>
      )}

      {isSuccess && (
        <div className='mt-6 w-full'>
          <div
            className='rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800'
            role='alert'
          >
            <span className='mr-1 font-medium'>¡Formulario enviado!</span>
            Pronto nos contactaremos.
          </div>
        </div>
      )}

      {isError && (
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
      )}
    </>
  )
}
