import { FC, Fragment, useState } from 'react'
import Head from 'next/head'

import GlobalStyles from '@/styles/GlobalStyles'
import Header from './header/header.component'
import Menu from './menu/menu.component'
import Backdrop from './backdrop/backdrop.component'
import { StyledMain } from './layout.styles'

const Layout: FC = ({ children }) => {
	const [ isOpenMenu, setIsOpenMenu ] = useState(false)

	return (
		<Fragment>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap' rel='stylesheet' />
				<title>Food Delivery</title>
			</Head>
			<GlobalStyles />
			<Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
			<Menu isOpenMenu={isOpenMenu} />
			<StyledMain>{children}</StyledMain>
			<Backdrop isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
		</Fragment>
	)
}

export default Layout
