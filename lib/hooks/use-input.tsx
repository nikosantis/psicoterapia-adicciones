'use client'

import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { BaseSchema, ValiError, flatten, parseAsync } from 'valibot'

type InputTypeText = 'text'
type InputTypeEmail = 'email'
type InputTypePassword = 'password'
type InputTypeTextarea = 'textarea'
type InputType =
  | InputTypeText
  | InputTypeEmail
  | InputTypePassword
  | InputTypeTextarea

type InputTypeInterface<T extends InputType> = T extends InputTypeTextarea
  ? HTMLTextAreaElement
  : HTMLInputElement

type UseInputProps = {
  baseValue: string
  type: InputType
  schema?: BaseSchema
  placeholder?: string
  defaultValue?: string
  reset?: boolean
  handleValidate?: (to: boolean) => void
  handleChange?: (value: string) => void
}

export function useInput({
  baseValue,
  type,
  schema,
  placeholder,
  reset,
  handleValidate,
  handleChange,
}: UseInputProps) {
  const [initialRender, setInitialRender] = useState(true)
  const [value, setValue] = useState<typeof baseValue>(() => baseValue)
  const [errors, setErrors] = useState<string[] | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (baseValue) {
      setValue(baseValue)
    }
  }, [baseValue])

  useEffect(() => {
    if (reset) {
      setValue(baseValue)
      setInitialRender(true)
      setIsSuccess(false)
      if (handleValidate) {
        handleValidate(false)
      }
    }
  }, [reset, baseValue, handleValidate])

  useEffect(() => {
    if (baseValue !== value && value.length > 0) {
      setInitialRender(false)
    }
  }, [baseValue, value])

  const resolver = useCallback(async () => {
    if (!schema) return
    try {
      const result = await parseAsync(schema, value)
      if (result) {
        setErrors(null)
        setIsSuccess(true)
        if (handleValidate) {
          handleValidate(true)
        }
      }
    } catch (err) {
      if (err instanceof ValiError) {
        setIsSuccess(false)
        const valibotError = flatten(err)
        const _errors = valibotError
        _errors.root && setErrors(_errors.root)
      }
    }
  }, [schema, value, handleValidate])

  useEffect(() => {
    if (initialRender) {
      setErrors(null)
    } else {
      resolver()
    }
  }, [resolver, initialRender])

  const onChange = useCallback(
    (event: ChangeEvent<InputTypeInterface<typeof type>>) => {
      setValue(event.target.value)
      if (handleChange) {
        handleChange(event.target.value)
      }
    },
    [handleChange],
  )
  const inputProps = useMemo(
    () => ({
      onChange,
      value,
      type: type === 'textarea' ? undefined : type,
      placeholder,
    }),
    [placeholder, type, value, onChange],
  )

  return {
    inputProps: inputProps,
    errors,
    hasErrors: errors ? errors.length > 0 : false,
    isSuccess: isSuccess,
  }
}
