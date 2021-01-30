import { FC, useEffect, useRef } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { StyledBackdrop } from './backdrop.styles'

interface BackdropProps {
	show: boolean
	onHide: () => void
}

const Backdrop: FC<BackdropProps> = (props) => {
	const { show, onHide } = props
	const backdropRef = useRef(null)

	useEffect(
		() => {
			if (show) disableBodyScroll(backdropRef.current)
			else enableBodyScroll(backdropRef.current)
		},
		[ show ],
	)

	return <span ref={backdropRef}>{show && <StyledBackdrop className='backdrop-blur' onClick={onHide} />}</span>
}

export default Backdrop
