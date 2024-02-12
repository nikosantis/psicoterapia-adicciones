import { useEffect } from 'react'
import { cn } from '@/lib/utils'
import {
  type FormState,
  useFormDispatchContext,
  useFormStateContext,
} from './form-context'

const alertStatusMap = {
  warning: cn('bg-yellow-100 text-yellow-700'),
  danger: cn('bg-red-100 text-red-700'),
  success: cn('bg-green-100 text-green-700'),
}

function AlertComponent({
  status,
  title,
  message,
}: {
  status: 'warning' | 'danger' | 'success'
  title: string
  message: string
}) {
  return (
    <div className='mt-6 w-full'>
      <div
        className={cn('mb-4 rounded-lg p-4 text-sm', alertStatusMap[status])}
        role='alert'
      >
        <span className='mr-1 font-medium'>{title}</span>
        {message}
      </div>
    </div>
  )
}

const statusMessagesMap: Record<
  FormState['status'],
  {
    status: 'warning' | 'danger' | 'success'
    title: string
    message: string
  } | null
> = {
  exist: {
    status: 'warning',
    title: '¡Ya nos has contactado!',
    message: 'Si necesitas más información, contáctanos por los otros medios.',
  },
  success: {
    status: 'success',
    title: '¡Formulario enviado!',
    message: 'Pronto nos contactaremos.',
  },
  error: {
    status: 'danger',
    title: '¡Error al enviar el formulario!',
    message: 'Por favor inténtalo nuevamente.',
  },
  idle: null,
  loading: null,
}

export default function Alert() {
  const {
    state: { status },
  } = useFormStateContext()
  const { reset } = useFormDispatchContext()

  const alertMessages = statusMessagesMap[status]

  useEffect(() => {
    if (status === 'success') {
      setTimeout(() => {
        reset()
      }, 5000)
    }
  }, [status, reset])

  if (alertMessages === null) return null

  return <AlertComponent {...alertMessages} />
}
