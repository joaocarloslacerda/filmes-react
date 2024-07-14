import './style.css'
import { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'>{
    children: ReactNode;
}

export const Button = ({children, ...rest}: ButtonProps) => {
    return <button {...rest}>{children}</button>
}