import { FC } from 'react'

import Backdrop from '../backdrop/backdrop.component'
import { StyledModal } from './modal.styled'

interface ModalProps {
  show: boolean
  onHide: () => void
}

const Modal: FC<ModalProps> = (props) => {
  const { children, show, onHide } = props

  return (
    <StyledModal show={show}>
      <section>{children}</section>
      <Backdrop show={show} onClick={onHide} />
    </StyledModal>
  )
}

export default Modal
