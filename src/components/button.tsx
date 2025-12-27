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
      backgroundColor: 'darkgray'
    }
  }
  return (
    <button style={{...variantStyles[variant], color: 'white', border: 0}} onClick={onClick}>{children}</button>
  )
}