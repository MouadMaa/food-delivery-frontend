import { FC } from 'react'

import { StyledIconButton } from './icon-button.styles'

const IconButton: FC = ({ children }) => {
	return <StyledIconButton className='group'>{children}</StyledIconButton>
}

export default IconButton
