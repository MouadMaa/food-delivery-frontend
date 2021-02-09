import { FC } from 'react'

import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { StyledBackdrop } from './backdrop.styles'

interface BackdropProps {
	onClick?: () => void
}

const Backdrop: FC<BackdropProps> = (props) => {
	const { onClick } = props
	useLockBodyScroll()
	return <StyledBackdrop className='backdrop-blur' onClick={onClick} />
}

export default Backdrop
