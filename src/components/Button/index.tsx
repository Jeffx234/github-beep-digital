import { ButtonForm } from './styled'
import { ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
  onClick?: any
}

export function Button({ onClick, children, ...props }: IButtonProps) {
  return (
    <ButtonForm onClick={onClick} {...props}>
      {children}
    </ButtonForm>
  )
}
