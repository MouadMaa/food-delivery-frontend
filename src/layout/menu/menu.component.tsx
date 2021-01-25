import React, { FC, Fragment, useState } from 'react'
import 'twin.macro'

import {
	ContactSvg,
	DeliveryAddressSvg,
	FavoriteSvg,
	HomeSvg,
	LogOutSvg,
	OrdersHistorySvg,
	ProfileSvg,
} from './menu.svg'
import { StyledMenu, MenuItem } from './menu.styles'

interface MenuProps {
	isOpenMenu: boolean
	setIsOpenMenu: (openMenu: boolean) => void
}

const Menu: FC<MenuProps> = (props) => {
	const { isOpenMenu, setIsOpenMenu } = props

	const [ activeLink, setActiveLink ] = useState('Home')

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
			<StyledMenu isOpenMenu={isOpenMenu}>
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
			{isOpenMenu && (
				<div className='backdrop-blur' tw='fixed inset-0 z-40' onClick={() => setIsOpenMenu(!isOpenMenu)} />
			)}
		</Fragment>
	)
}

export default Menu
