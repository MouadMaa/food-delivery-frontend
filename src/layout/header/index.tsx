import React, { FC } from 'react'
import tw, { css, styled } from 'twin.macro'

import Burger from './burger/burger.component'
import Logo from './logo/logo.component'
import MobileSignInOut from './mobile-sign-in-out/mobile-sign-in-out.component'
import SearchForm from './search-form/search-form.component'
import DesktopSignInOut from './desktop-sign-in-out/desktop-sign-in-out.component'
// import Avatar from './avatar/avatar.component'

const Header: FC = () => {
	return (
		<StyledHeader>
			<div>
				<Burger />
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

const StyledHeader = styled.header(() => [
	tw`font-body text-md text-gray-700 bg-white`,
	tw`border-b-2 border-gray-200`,
	tw`flex items-center justify-between h-16 px-4`,
	tw`md:px-8`,
	tw`dark:(text-gray-50 bg-gray-900 border-gray-600)`,
	css`
		> div:first-child {
			${tw`flex items-center justify-between w-full`};
			${tw`md:(w-auto space-x-3)`};
		}
	`,
])
