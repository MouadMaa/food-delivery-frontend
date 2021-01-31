import { FC } from 'react'

import { StyledSwitch } from './switch.styles'

interface SwitchProps {
	name: string
	label: string
	value: boolean
	onChange: () => void
}

const Switch: FC<SwitchProps> = (props) => {
	const { name, label, value, onChange } = props

	return (
		<StyledSwitch htmlFor={name} isChecked={value}>
			<div>
				<div />
				<input type='checkbox' id={name} checked={value} onChange={onChange} />
			</div>
			<span>{label}</span>
		</StyledSwitch>
	)
}

export default Switch
