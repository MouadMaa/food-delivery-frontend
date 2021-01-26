import React, { FC, Fragment, useEffect, useRef, useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import {
	ContactSvg,
	DeliveryAddressSvg,
	FavoriteSvg,
	HomeSvg,
	LogOutSvg,
	OrdersHistorySvg,
	ProfileSvg,
} from './menu.svg'
import { StyledMenu, MenuItem, BackDrop } from './menu.styles'

interface MenuProps {
	isOpenMenu: boolean
	setIsOpenMenu: (openMenu: boolean) => void
}

const Menu: FC<MenuProps> = (props) => {
	const { isOpenMenu, setIsOpenMenu } = props

	const menuRef = useRef(null)
	const [ activeLink, setActiveLink ] = useState('Home')

	useEffect(
		() => {
			if (isOpenMenu) disableBodyScroll(menuRef.current)
			else enableBodyScroll(menuRef.current)
		},
		[ isOpenMenu ],
	)

	const items = [
		{ text: 'Home', svg: <HomeSvg /> },
		{ text: 'Profile', svg: <ProfileSvg /> },
		{ text: 'Favorites', svg: <FavoriteSvg /> },
		{ text: 'Delivery Address', svg: <DeliveryAddressSvg /> },
		{ text: 'Orders History', svg: <OrdersHistorySvg /> },
		{ text: 'Contact Us', svg: <ContactSvg /> },
	]

	return (
		<Fragment>
			<StyledMenu isOpenMenu={isOpenMenu} ref={menuRef}>
				<ul>
					{items.map((link) => (
						<MenuItem
							key={link.text}
							className='group'
							isActive={activeLink === link.text}
							onClick={() => setActiveLink(link.text)}
						>
							<div />
							{link.svg}
							<span>{link.text}</span>
						</MenuItem>
					))}
				</ul>
				<button>
					<LogOutSvg />
					<span>Sign Out</span>
				</button>
			</StyledMenu>
			{isOpenMenu && <BackDrop className='backdrop-blur' onClick={() => setIsOpenMenu(!isOpenMenu)} />}
		</Fragment>
	)
}

export default Menu
