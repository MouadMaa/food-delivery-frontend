import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { FC, useRef } from 'react'

import Backdrop from '../backdrop/backdrop.component'
import { StyledModal } from './modal.styled'

interface ModalProps {
  isOpen: boolean
  onHide: () => void
}

const Modal: FC<ModalProps> = (props) => {
  const { children, isOpen, onHide } = props

  const ref = useRef(null)

  useOnClickOutside(ref, onHide)

  return (
    <StyledModal isOpen={isOpen}>
      <section ref={ref}>{children}</section>
      {isOpen && <Backdrop />}
    </StyledModal>
  )
}

export default Modal
