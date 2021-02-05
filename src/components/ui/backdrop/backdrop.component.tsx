import { FC } from 'react'

import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { StyledBackdrop } from './backdrop.styles'

const Backdrop: FC = () => {
	useLockBodyScroll()
	return <StyledBackdrop className='backdrop-blur' />
}

export default Backdrop
