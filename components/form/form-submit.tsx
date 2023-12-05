'use client'

import Script from 'next/script'
import {
  ReactNode,
  SyntheticEvent,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'
import { sendGTMEvent } from '@next/third-parties/google'
import { useReCaptcha } from 'next-recaptcha-v3'
import { safeParseAsync } from 'valibot'
import { FormSchema } from '@/lib/validations'

interface FormContext {
  isFormValid: boolean
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  isExist: boolean
  errorMsg: string | null
}

const FormContext = createContext<FormContext>({} as FormContext)

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

type FormSubmitProps = {
  children: ReactNode
}

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export default function FormSubmit({ children }: FormSubmitProps) {
  const [isFormValid, setFormValid] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isExist, setIsExist] = useState(false)
  const [errorMsg, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleInput = useCallback(async () => {
    if (formRef.current) {
      const elements = formRef.current.elements
      const formElements = {
        name: (elements.namedItem('name') as HTMLInputElement).value,
        profession: (elements.namedItem('profession') as HTMLInputElement)
          .value,
        email: (elements.namedItem('email') as HTMLInputElement).value,
        phone: (elements.namedItem('phone') as HTMLInputElement).value,
        comments: (elements.namedItem('comments') as HTMLTextAreaElement).value,
      }
      try {
        const { success } = await safeParseAsync(FormSchema, formElements)
        setFormValid(success)
      } catch (err) {}
    }
  }, [])

  const handleSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
      const targets = e.target as typeof e.target & FormTypes
      try {
        setError(null)
        setSuccess(false)
        setIsError(false)
        setLoading(true)
        setIsExist(false)

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
                    comments: targets.comments.value,
                    token,
                  }),
                })

                const resJson = await response.json()
                if (response.ok && resJson) {
                  setSuccess(true)
                  setLoading(false)
                  sendGTMEvent({ event: 'submitOk' })
                } else if (resJson.message === 'Email exist') {
                  setIsExist(true)
                  setLoading(false)
                } else {
                  setIsError(true)
                  setLoading(false)
                  setError('Error al intentar enviar el formulario')
                }
              })
          })
        }
      } catch (err) {
        setIsError(true)
        setLoading(false)
        setError('Error al intentar enviar el formulario')
      }
    },
    [],
  )

  return (
    <form
      onSubmit={handleSubmit}
      onInput={handleInput}
      id='contact-form'
      ref={formRef}
      className='transition-all'
    >
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}`}
        strategy='lazyOnload'
      />

      <FormContext.Provider
        value={{
          isFormValid,
          isLoading,
          errorMsg,
          isSuccess,
          isError,
          isExist,
        }}
      >
        {children}
      </FormContext.Provider>
    </form>
  )
}

export function useFormContext() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormSubmit')
  }
  return context
}
