'use client'

import { FormProvider } from './form-context'

export default function WspProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <FormProvider form='wsp'>{children}</FormProvider>
}
