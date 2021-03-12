import { FC } from 'react'

import Backdrop from '../backdrop/backdrop.component'
import { StyledModal } from './modal.styled'

interface ModalProps {
  isOpen: boolean
  onHide: () => void
}

const Modal: FC<ModalProps> = (props) => {
  const { children, isOpen, onHide } = props

  return (
    <StyledModal isOpen={isOpen}>
      <section>{children}</section>
      {isOpen && <Backdrop onClick={onHide} />}
    </StyledModal>
  )
}

export default Modal
