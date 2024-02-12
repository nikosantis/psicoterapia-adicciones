'use client'

import { FormProvider } from './form-context'

export default function ContactProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <FormProvider form='contact'>{children}</FormProvider>
}
