import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useUserLoadingValue, useUserValue } from '@/store/user/user.state'
import { useSideMenuState } from '@/store/global/global.state'
import SearchForm from '@/components/shared/search/search-form/search-form.component'
import Burger from './burger/burger.component'
import Logo from './logo/logo.component'
import MobileAuth from './mobile-auth/mobile-auth.component'
import DesktopAuth from './desktop-auth/desktop-auth.component'
import Avatar from './avatar/avatar.component'
import { StyledHeader } from './header.styles'

const Header: FC = () => {
  const router = useRouter()

  const user = useUserValue()
  const userLoading = useUserLoadingValue()

  const [isSideMenuOpen, setIsSideMenuOpen] = useSideMenuState()
  const [stickyHeader, setStickyHeader] = useState(true)

  useEffect(() => {
    setStickyHeader(!router.pathname.includes('/restaurant'))
  }, [router])

  return (
    <StyledHeader
      stickyHeader={stickyHeader}
      onClick={() => isSideMenuOpen && setIsSideMenuOpen(false)}
    >
      <div>
        <Burger onClick={() => !isSideMenuOpen && setIsSideMenuOpen(true)} />
        <Logo />
        {userLoading ? <div /> : user ? <Avatar /> : <MobileAuth />}
      </div>
      <SearchForm isHeader />
      {userLoading ? <div /> : user ? <Avatar /> : <DesktopAuth />}
    </StyledHeader>
  )
}

export default Header
