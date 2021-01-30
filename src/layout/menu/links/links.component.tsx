import { FC, useState } from 'react'
import Link from 'next/link'

import { ContactSvg, DeliveryAddressSvg, FavoriteSvg, HomeSvg, OrdersHistorySvg, ProfileSvg } from './links.svg'
import { StyledMenuLinks, StyledMenuLink } from './links.styles'

const Links: FC = () => {
	const [ activeLink, setActiveLink ] = useState('Home')

	const items = [
		{ text: 'Home', href: '/', svg: <HomeSvg /> },
		{ text: 'Profile', href: '/', svg: <ProfileSvg /> },
		{ text: 'Favorites', href: '/', svg: <FavoriteSvg /> },
		{ text: 'Delivery Address', href: '/', svg: <DeliveryAddressSvg /> },
		{ text: 'Orders History', href: '/', svg: <OrdersHistorySvg /> },
		{ text: 'Contact Us', href: '/', svg: <ContactSvg /> },
	]

	return (
		<StyledMenuLinks>
			{items.map((link) => (
				<Link key={link.text} href={link.href}>
					<StyledMenuLink isActive={activeLink === link.text} onClick={() => setActiveLink(link.text)}>
						<div />
						{link.svg}
						<span>{link.text}</span>
					</StyledMenuLink>
				</Link>
			))}
		</StyledMenuLinks>
	)
}

export default Links
