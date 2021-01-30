import React, { FC } from 'react'

import Links from './links/links.component'
import SignOut from './sign-out/sign-out.component'
import { StyledMenu } from './menu.styles'

interface MenuProps {
	isOpenMenu: boolean
}

const Menu: FC<MenuProps> = (props) => {
	const { isOpenMenu } = props

	return (
		<StyledMenu isOpenMenu={isOpenMenu}>
			<Links />
			<SignOut />
		</StyledMenu>
	)
}

export default Menu
