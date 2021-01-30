import { FC, Fragment } from 'react'
import Head from 'next/head'

import GlobalStyles from '@/styles/GlobalStyles'
import Header from './header/header.component'
import Menu from './menu/menu.component'
import { StyledMain } from './layout.styles'

const Layout: FC = (props) => {
	const { children } = props

	return (
		<Fragment>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap' rel='stylesheet' />
				<title>Food Delivery</title>
			</Head>
			<GlobalStyles />
			<Header />
			<Menu />
			<StyledMain>{children}</StyledMain>
		</Fragment>
	)
}

export default Layout
