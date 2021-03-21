import { FC, Fragment } from 'react'

import { auth } from '@/firebase/firebase'
import { useUserValue } from '@/store/user/user.state'
import { useSetShowAuthModalState, useSetSideMenuState } from '@/store/global/global.state'
import { StyledSignButton } from './sign-button.styles'
import { LogInSvg, LogOutSvg } from './sign-button.svg'

const SignButton: FC = () => {
  const user = useUserValue()
  const setShowAuthModal = useSetShowAuthModalState()
  const setIsSideMenuOpen = useSetSideMenuState()

  const handleClick = async () => {
    if (user) await auth.signOut()
    else setShowAuthModal(true)
    setIsSideMenuOpen(false)
  }

  return (
    <StyledSignButton onClick={handleClick}>
      {!user && (
        <Fragment>
          <LogInSvg />
          <span>Sign In</span>
        </Fragment>
      )}
      {user && (
        <Fragment>
          <LogOutSvg />
          <span>Sign Out</span>
        </Fragment>
      )}
    </StyledSignButton>
  )
}

export default SignButton
