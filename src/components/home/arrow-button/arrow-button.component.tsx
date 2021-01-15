import { FC } from 'react'

import { StyledArrowButton } from './arrow-button.styles'
import { ArrowButtonSvg } from './arrow-button.svg'

export interface ArrowButtonProps {
	pointer: 'PREV' | 'NEXT'
	onClick: () => void
}

const ArrowButton: FC<ArrowButtonProps> = (props) => {
	const { pointer, onClick } = props

	return (
		<StyledArrowButton pointer={pointer} onClick={onClick}>
			<div>
				<ArrowButtonSvg />
			</div>
		</StyledArrowButton>
	)
}

export default ArrowButton
