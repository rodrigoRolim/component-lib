import type { CSSProperties, PropsWithChildren } from "react"

type BaseProps = {
  variant: 'primary' | 'secondary'
  onClick?: () => void
}
type ButtonProps = PropsWithChildren<BaseProps>

export default function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  const variantStyles: Record<ButtonProps['variant'], CSSProperties> = {
    primary: {
      backgroundColor: 'blue'
    },
    secondary: {
      backgroundColor: 'gray'
    }
  }
  return (
    <button style={{...variantStyles[variant], color: 'white'}} onClick={onClick}>{children}</button>
  )
}