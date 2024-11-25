'use client'

import { useState, useTransition } from 'react'
import Script from 'next/script'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendGTMEvent } from '@next/third-parties/google'
import { CheckCircleIcon, CircleXIcon, Loader2Icon } from 'lucide-react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useReCaptcha } from 'next-recaptcha-v3'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { formSchema, type FormValues } from '@/lib/validations'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { sendEmailAction } from './actions'

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export default function FormSubmit({
  children,
}: {
  children: React.ReactNode
}) {
  const [isPending, startTransaction] = useTransition()
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)
  const formProps = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      profession: '',
      comments: '',
    },
  })
  const {
    handleSubmit,
    setError,
    reset,
    formState: {
      errors: { root },
    },
  } = formProps

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitSuccessful(false)
    startTransaction(async () => {
      try {
        if (window && window.grecaptcha) {
          window.grecaptcha.ready(() => {
            window.grecaptcha
              .execute(reCaptchaKey, { action: 'submit' })
              .then(async (token) => {
                try {
                  const formData = new FormData()
                  formData.append('name', data.name)
                  formData.append('email', data.email)
                  formData.append('phone', data.phone)
                  formData.append('profession', data.profession)
                  formData.append('comments', data.comments || '')
                  formData.append('token', token)
                  const result = await sendEmailAction(formData)
                  if (result.error) {
                    throw new Error(result.error)
                  }
                  sendGTMEvent({ event: 'submitOk' })
                  setIsSubmitSuccessful(true)
                  reset({
                    name: '',
                    email: '',
                    phone: '',
                    profession: '',
                    comments: '',
                  })
                } catch (error) {
                  console.log('error', error)
                  setError('root.globalError', {
                    type: 'manual',
                    message: 'Error al intentar enviar el formulario',
                  })
                }
              })
          })
        } else {
          throw new Error('Error al intentar enviar el formulario')
        }
      } catch (err) {
        console.log('err', err)
        setError('root.globalError', {
          type: 'manual',
          message: 'Error al intentar enviar el formulario',
        })
      }
    })
  }

  return (
    <FormProvider {...formProps}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id='contact-form'
        className='transition-all'
      >
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}`}
          strategy='lazyOnload'
        />
        <div className='flex flex-col gap-y-4'>
          {children}
          <div className='w-full'>
            <button
              type='submit'
              disabled={isPending}
              className={cn(
                'select-none rounded bg-u-orange-primary-500 px-3 py-2 text-center font-medium text-white transition-all hover:bg-u-orange-primary-700',
                'disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none disabled:bg-u-orange-primary-500/40',
                'inline-flex',
              )}
            >
              {isPending ? (
                <>
                  <Loader2Icon className='mr-2 size-4 animate-spin' />
                  <span>Enviando...</span>
                </>
              ) : (
                <span>Enviar</span>
              )}
            </button>
          </div>

          {!root?.globalError && isSubmitSuccessful && (
            <Alert title='¡Formulario enviado!' variant='success'>
              <CheckCircleIcon className='size-4' />
              <AlertTitle>¡Formulario enviado!</AlertTitle>
              <AlertDescription>
                Nos comunicaremos contigo a la brevedad.
              </AlertDescription>
            </Alert>
          )}
          {root?.globalError && (
            <Alert title='Error al enviar el formulario' variant='destructive'>
              <CircleXIcon className='size-4' />
              <AlertTitle>Error al enviar el formulario</AlertTitle>
              <AlertDescription>
                Por favor, intenta nuevamente.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </form>
    </FormProvider>
  )
}
