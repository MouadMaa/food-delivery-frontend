import { FC } from 'react'

import { StyledArrowButton } from './arrow-button.styles'
import { ArrowButtonSvg } from './arrow-button.svg'

export interface ArrowButtonProps {
	pointer: 'PREV' | 'NEXT'
}

const ArrowButton: FC<ArrowButtonProps> = (props) => {
	const { pointer, ...others } = props

	return (
		<StyledArrowButton pointer={pointer}>
			<div />
			<div>
				<div>
					<ArrowButtonSvg />
				</div>
			</div>
		</StyledArrowButton>
	)
}

export default ArrowButton
