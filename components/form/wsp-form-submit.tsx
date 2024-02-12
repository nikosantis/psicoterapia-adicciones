'use client'

import Script from 'next/script'
import { FormEvent, ReactNode, SyntheticEvent, useCallback } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'
import { useReCaptcha } from 'next-recaptcha-v3'
import * as v from 'valibot'
import { FormSchema } from '@/lib/validations'
import { useFormDispatchContext } from './form-context'

type FormValue = {
  value: string
}

type FormTypes = {
  name: FormValue
  email: FormValue
  profession: FormValue
  phone: FormValue
  comments: FormValue
}

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export default function WspFormSubmit({ children }: { children: ReactNode }) {
  const { start, success, validate, exist, error } = useFormDispatchContext()

  const handleInput = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      const formData = new FormData(e.currentTarget)
      const formElements = {
        name: formData.get('name') as string,
        profession: formData.get('profession') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        comments: (formData.get('comments') as string) || undefined,
      }
      try {
        const vali = await v.safeParseAsync(FormSchema, formElements)
        validate(vali.success)
      } catch (err) {}
    },
    [validate],
  )

  const handleSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
      start()
      const targets = e.target as typeof e.target & FormTypes
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
                    name: targets.name.value,
                    email: targets.email.value,
                    phone: targets.phone.value,
                    profession: targets.profession.value,
                    token,
                  }),
                })

                const resJson = await response.json()
                if (response.ok && resJson) {
                  success()
                  sendGTMEvent({ event: 'submitOk' })
                  window.open(
                    'https://api.whatsapp.com/send?phone=56961640345',
                    '_blank',
                  )
                } else if (resJson.message === 'Email exist') {
                  exist()
                } else {
                  error('Error al intentar enviar el formulario')
                }
              })
          })
        }
      } catch (err) {
        error('Error al intentar enviar el formulario')
      }
    },
    [start, success, exist, error],
  )

  return (
    <form
      onSubmit={handleSubmit}
      onInput={handleInput}
      id='wsp-form'
      className='transition-all'
    >
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}`}
        strategy='lazyOnload'
      />

      {children}
    </form>
  )
}
