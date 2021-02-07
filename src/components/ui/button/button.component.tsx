import { FC } from 'react'

import { StyledButton } from './button.styles'

export type ButtonLevels = 'Primary' | 'Secondary' | 'SubTitle' | 'Title'

interface ButtonProps {
	text: string
	level?: ButtonLevels
	onClick?: () => void
}

const Button: FC<ButtonProps> = (props) => {
	const { text, level = 'Primary', onClick } = props

	return (
		<StyledButton level={level} onClick={onClick}>
			{text}
		</StyledButton>
	)
}

export default Button
