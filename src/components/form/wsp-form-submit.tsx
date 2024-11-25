'use client'

import Script from 'next/script'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendGTMEvent } from '@next/third-parties/google'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useReCaptcha } from 'next-recaptcha-v3'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { formSchema, type FormValues } from '@/lib/validations'

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export default function WspFormSubmit({
  children,
}: {
  children: React.ReactNode
}) {
  const formProps = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      profession: '',
      comments: undefined,
    },
  })

  const { handleSubmit, setError } = formProps

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (window && window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(reCaptchaKey, { action: 'submit' })
            .then(async (token) => {
              const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: data.name,
                  email: data.email,
                  phone: data.phone,
                  profession: data.profession,
                  comments: data.comments,
                  token,
                }),
              })

              const resJson = await response.json()
              if (response.ok && resJson) {
                sendGTMEvent({ event: 'submitOk' })
                window.open(
                  'https://api.whatsapp.com/send?phone=56961640345',
                  '_blank',
                )
              } else {
                throw new Error('Error al intentar enviar el formulario')
              }
            })
        })
      }
    } catch (err) {
      console.error(err)
      setError('root.globalError', {
        type: 'manual',
        message: 'Error al intentar enviar el formulario',
      })
    }
  }

  return (
    <FormProvider {...formProps}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id='wsp-form'
        className='transition-all'
      >
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}`}
          strategy='lazyOnload'
        />
        <div className='flex flex-col'>{children}</div>
      </form>
    </FormProvider>
  )
}
