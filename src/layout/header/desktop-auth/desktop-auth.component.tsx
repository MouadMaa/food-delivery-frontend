import { FC } from 'react'

import { useSetShowAuthModalState } from '@/store/global/global.state'
import { Button } from '@/components/ui'
import { StyledDesktopSignInOut } from './desktop-auth.styles'

const DesktopAuth: FC = () => {
  const setShowAuthModal = useSetShowAuthModalState()

  const signIn = () => setShowAuthModal(true)

  return (
    <StyledDesktopSignInOut>
      <Button text='Create Account' onClick={signIn} />
      <Button text='Sign In' level='Secondary' onClick={signIn} />
    </StyledDesktopSignInOut>
  )
}

export default DesktopAuth
