import { InputForm } from './styled'
import React, { ReactNode } from 'react'

interface InputProps {
  type?: string
  placeholder?: string
  onChange?: any
  onFocus?: any
  onBlur?: any
  value?: string
  onKeyPress?: any
}

export function Input ({
  onFocus,
  value,
  onBlur,
  placeholder,
  onChange,
  onKeyPress,
  ...props
}: InputProps) {
  return (
    <InputForm
      placeholder={placeholder}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      onKeyPress={onKeyPress}
      onChange={onChange}
      {...props}
    />
  )
}
