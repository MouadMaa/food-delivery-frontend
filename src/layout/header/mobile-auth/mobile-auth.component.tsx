import { FC, useState } from 'react'

import { IconButton, Dropdown } from '@/components/ui'
import { StyledMobileSign } from './mobile-auth.styles'
import { UserSvg } from './mobile-auth.svg'
import { useRouter } from 'next/router'

const MobileAuth: FC = () => {
  const router = useRouter()

  const [show, setShowDropdown] = useState(false)

  const signIn = () => router.push('/auth')

  const itemsDropdown = ['Sign In', 'Create Account']

  return (
    <StyledMobileSign onClick={() => setShowDropdown(!show)}>
      <IconButton>
        <UserSvg />
      </IconButton>

      <Dropdown
        show={show}
        onHide={() => setShowDropdown(false)}
        items={itemsDropdown}
        onSelect={signIn}
      />
    </StyledMobileSign>
  )
}

export default MobileAuth
