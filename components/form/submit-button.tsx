import clsx from 'clsx'
import Spin from '@/components/spin'
import { useFormContext } from './form-submit'

export default function SubmitButton() {
  const { isFormValid, isLoading } = useFormContext()
  return (
    <button
      type='submit'
      disabled={!isFormValid || isLoading}
      className={clsx(
        'bg-u-orange-primary-500 hover:bg-u-orange-primary-700 select-none rounded px-3 py-2 text-center font-medium text-white transition-all',
        'disabled:bg-u-orange-primary-500/40 disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none',
        'inline-flex',
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
