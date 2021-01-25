import { FC } from 'react'

import { StyledIconButton } from './icon-button.styles'

interface IconButtonProps {
	onClick: () => void
}

const IconButton: FC<IconButtonProps> = (props) => {
	const { onClick, children } = props

	return (
		<StyledIconButton className='group' onClick={onClick}>
			{children}
		</StyledIconButton>
	)
}

export default IconButton
