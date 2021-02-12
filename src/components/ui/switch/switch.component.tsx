import { FC } from 'react'

import { StyledSwitch } from './switch.styles'

interface SwitchProps {
	text: string
	value: boolean
	onClick: () => void
}

const Switch: FC<SwitchProps> = (props) => {
	const { text, value, onClick } = props

	return (
		<StyledSwitch isChecked={value} onClick={onClick}>
			<button>
				<div />
			</button>
			<span>{text}</span>
		</StyledSwitch>
	)
}

export default Switch
