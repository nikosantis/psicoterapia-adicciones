import clsx from 'clsx'

import Spin from 'components/spin'
import { useFormContext } from './form-submit'

export default function SubmitButton() {
  const { isFormValid, isLoading } = useFormContext()
  return (
    <button
      type='submit'
      disabled={!isFormValid || isLoading}
      className={clsx(
        'py-2 px-3 bg-u-orange-primary-500 text-white select-none rounded font-medium text-center transition-all hover:bg-u-orange-primary-700',
        'disabled:cursor-not-allowed disabled:select-none disabled:bg-u-orange-primary-500/40 disabled:pointer-events-none',
        'inline-flex'
      )}
      form='contact-form'
    >
      {isLoading && (
        <>
          <span className='mr-2'>
            <Spin />
          </span>
          <span>Enviando...</span>
        </>
      )}
      {!isLoading && <span>Enviar</span>}
    </button>
  )
}
