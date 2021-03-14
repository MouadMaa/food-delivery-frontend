import { FC, Fragment } from 'react'
import { useRouter } from 'next/router'

import { auth } from '@/firebase/firebase'
import { useUserValue } from '@/store/user/user.state'
import { useSetSideMenuState } from '@/store/global/global.state'
import { StyledSignButton } from './sign-button.styles'
import { LogInSvg, LogOutSvg } from './sign-button.svg'

const SignButton: FC = () => {
  const router = useRouter()

  const user = useUserValue()
  const setIsSideMenuOpen = useSetSideMenuState()

  const handleClick = async () => {
    if (user) await auth.signOut()
    else router.push('/auth')
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
