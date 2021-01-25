import { FC } from 'react'

import { StyledArrowButton } from './arrow-button.styles'
import { ArrowButtonSvg } from './arrow-button.svg'

interface ArrowButtonProps {
	arrow: 'PREV' | 'NEXT'
	onClick: () => void
	disabled: boolean
}

const ArrowButton: FC<ArrowButtonProps> = (props) => {
	const { arrow, onClick, disabled } = props

	return (
		!disabled && (
			<StyledArrowButton className='group' style={{ zIndex: 1 }} arrow={arrow} onClick={onClick}>
				<div />
				<div>
					<div>
						<ArrowButtonSvg />
					</div>
				</div>
			</StyledArrowButton>
		)
	)
}

export default ArrowButton
