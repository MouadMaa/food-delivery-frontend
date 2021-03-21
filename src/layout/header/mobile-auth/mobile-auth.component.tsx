import { FC, useState } from 'react'

import { useSetShowAuthModalState } from '@/store/global/global.state'
import { IconButton, Dropdown } from '@/components/ui'
import { StyledMobileSign } from './mobile-auth.styles'
import { UserSvg } from './mobile-auth.svg'

const MobileAuth: FC = () => {
  const setShowAuthModal = useSetShowAuthModalState()

  const [showDropdown, setShowDropdown] = useState(false)

  const signIn = () => setShowAuthModal(true)

  const itemsDropdown = ['Sign In', 'Create Account']

  return (
    <StyledMobileSign onClick={() => setShowDropdown(!showDropdown)}>
      <IconButton>
        <UserSvg />
      </IconButton>

      <Dropdown
        show={showDropdown}
        onHide={() => setShowDropdown(false)}
        items={itemsDropdown}
        onSelect={signIn}
      />
    </StyledMobileSign>
  )
}

export default MobileAuth
