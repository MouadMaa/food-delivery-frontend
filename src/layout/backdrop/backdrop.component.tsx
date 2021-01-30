import { FC, useEffect, useRef } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { StyledBackdrop } from './backdrop.styles'

interface BackdropProps {
	isOpen: boolean
	setIsOpen: (openMenu: boolean) => void
}

const Backdrop: FC<BackdropProps> = (props) => {
	const { isOpen, setIsOpen } = props

	const ref = useRef(null)

	useEffect(
		() => {
			if (isOpen) disableBodyScroll(ref.current)
			else enableBodyScroll(ref.current)
		},
		[ isOpen ],
	)

	return (
		<span ref={ref}>{isOpen && <StyledBackdrop className='backdrop-blur' onClick={() => setIsOpen(!isOpen)} />}</span>
	)
}

export default Backdrop
