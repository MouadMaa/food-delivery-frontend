import React, { FC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { userState } from '@/store/user/user.state'
import { sideMenuState } from '@/store/app/app.state'
import Burger from './burger/burger.component'
import Logo from './logo/logo.component'
import MobileSignInOut from './mobile-sign-in-out/mobile-sign-in-out.component'
import SearchForm from './search-form/search-form.component'
import DesktopSignInOut from './desktop-sign-in-out/desktop-sign-in-out.component'
import Avatar from './avatar/avatar.component'
import { StyledHeader } from './header.styles'

const Header: FC = () => {
	const user = useRecoilValue(userState)
	const [ isSideMenuOpen, setIsSideMenuOpen ] = useRecoilState(sideMenuState)

	return (
		<StyledHeader onClick={() => isSideMenuOpen && setIsSideMenuOpen(false)}>
			<div>
				<Burger onClick={() => !isSideMenuOpen && setIsSideMenuOpen(true)} />
				<Logo />
				{!user && <MobileSignInOut />}
			</div>
			<SearchForm />
			{!user && <DesktopSignInOut />}
			{user && <Avatar />}
		</StyledHeader>
	)
}

export default Header
