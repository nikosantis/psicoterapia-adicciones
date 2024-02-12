import clsx from 'clsx'
import Spin from '@/components/spin'
import { useFormStateContext } from './form-context'

export default function SubmitButton() {
  const {
    state: { status, isFormValid, form },
  } = useFormStateContext()
  return (
    <button
      type='submit'
      disabled={status === 'loading' || status === 'success' || !isFormValid}
      className={clsx(
        'select-none rounded bg-u-orange-primary-500 px-3 py-2 text-center font-medium text-white transition-all hover:bg-u-orange-primary-700',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none disabled:bg-u-orange-primary-500/40',
        'inline-flex',
      )}
      form={`${form}-form`}
    >
      {status === 'loading' ? (
        <>
          <span className='mr-2'>
            <Spin />
          </span>
          <span>Enviando...</span>
        </>
      ) : (
        <span>Enviar</span>
      )}
    </button>
  )
}
