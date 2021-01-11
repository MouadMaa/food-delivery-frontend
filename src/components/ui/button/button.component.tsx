import { FC } from "react"

import { StyledButton } from "./button.styles"

export type ButtonLevels = 'Primary' | 'Secondary' | 'SubTitle' | 'Title'

interface ButtonProps {
  text: string,
  level?: ButtonLevels
}

const Button: FC<ButtonProps> = props => {
  const { text, level = 'Primary' } = props

  return (
    <StyledButton level={level}>
      {text}
    </StyledButton>
  )
}

export default Button
