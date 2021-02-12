import React, { FC } from 'react'

import { useUserValue } from '@/store/user/user.state'
import { useSideMenuState } from '@/store/app/app.state'
import SearchForm from '@/components/shared/search/search-form/search-form.component'
import Burger from './burger/burger.component'
import Logo from './logo/logo.component'
import MobileAuth from './mobile-auth/mobile-auth.component'
import DesktopAuth from './desktop-auth/desktop-auth.component'
import Avatar from './avatar/avatar.component'
import { StyledHeader } from './header.styles'

const Header: FC = () => {
	const user = useUserValue()
	const [ isSideMenuOpen, setIsSideMenuOpen ] = useSideMenuState()

	return (
		<StyledHeader onClick={() => isSideMenuOpen && setIsSideMenuOpen(false)}>
			<div>
				<Burger onClick={() => !isSideMenuOpen && setIsSideMenuOpen(true)} />
				<Logo />
				{!user && <MobileAuth />}
				{user && <Avatar />}
			</div>
			<SearchForm />
			{!user && <DesktopAuth />}
			{user && <Avatar />}
		</StyledHeader>
	)
}

export default Header
