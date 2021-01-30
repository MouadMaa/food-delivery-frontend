import React, { FC, useEffect, useRef } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import Links from './links/links.component'
import SignOut from './sign-out/sign-out.component'
import { StyledMenu } from './menu.styles'

interface MenuProps {
	isOpenMenu: boolean
}

const Menu: FC<MenuProps> = (props) => {
	const { isOpenMenu } = props

	const menuRef = useRef(null)

	useEffect(
		() => {
			if (isOpenMenu) disableBodyScroll(menuRef.current)
			else enableBodyScroll(menuRef.current)
		},
		[ isOpenMenu ],
	)

	return (
		<StyledMenu isOpenMenu={isOpenMenu} ref={menuRef}>
			<Links />
			<SignOut />
		</StyledMenu>
	)
}

export default Menu
