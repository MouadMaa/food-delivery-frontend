import { FC, useLayoutEffect } from 'react'

import { StyledBackdrop } from './backdrop.styles'

interface BackdropProps {
  show: boolean
  onClick?: () => void
}

const Backdrop: FC<BackdropProps> = (props) => {
  const { show, onClick } = props

  useLayoutEffect(() => {
    let originalStyle = ''
    if (show) {
      originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
    }

    return () => {
      if (show) document.body.style.overflow = originalStyle
    }
  }, [show])

  return <StyledBackdrop show={show} onClick={onClick} />
}

export default Backdrop
