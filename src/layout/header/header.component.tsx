import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useRecoilValue } from 'recoil'

import { userState } from '@/store/user/user.state'
import { toggleSideMenu } from '@/store/app/app.actions'
import Burger from './burger/burger.component'
import Logo from './logo/logo.component'
import MobileSignInOut from './mobile-sign-in-out/mobile-sign-in-out.component'
import SearchForm from './search-form/search-form.component'
import DesktopSignInOut from './desktop-sign-in-out/desktop-sign-in-out.component'
import Avatar from './avatar/avatar.component'
import { StyledHeader } from './header.styles'

const Header: FC = () => {
	const dispatch = useDispatch()
	const user = useRecoilValue(userState)

	return (
		<StyledHeader>
			<div>
				<Burger onClick={() => dispatch(toggleSideMenu())} />
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
