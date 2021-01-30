import React, { FC } from 'react'

import Burger from './burger/burger.component'
import Logo from './logo/logo.component'
import MobileSignInOut from './mobile-sign-in-out/mobile-sign-in-out.component'
import SearchForm from './search-form/search-form.component'
import DesktopSignInOut from './desktop-sign-in-out/desktop-sign-in-out.component'
// import Avatar from './avatar/avatar.component'
import { StyledHeader } from './header.styles'

interface HeaderProps {
	isOpenMenu: boolean
	setIsOpenMenu: (openMenu: boolean) => void
}

const Header: FC<HeaderProps> = (props) => {
	const { isOpenMenu, setIsOpenMenu } = props

	return (
		<StyledHeader>
			<div>
				<Burger onClick={() => setIsOpenMenu(!isOpenMenu)} />
				<Logo />
				<MobileSignInOut />
			</div>
			<SearchForm />
			<DesktopSignInOut />
			{/* <Avatar /> */}
		</StyledHeader>
	)
}

export default Header
