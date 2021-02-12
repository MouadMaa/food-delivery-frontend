import { FC, Fragment } from 'react'
import Head from 'next/head'

import GlobalStyles from '@/styles/GlobalStyles'
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { useRecoilDebugObserver } from '@/hooks/useRecoilDebugObserver'
import Header from './header/header.component'
import Menu from './menu/menu.component'
import { StyledMain } from './layout.styles'

const Layout: FC = (props) => {
	const { children } = props

	useFirebaseAuth()
	useRecoilDebugObserver()

	return (
		<Fragment>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap' rel='stylesheet' />
				<title>Food Delivery</title>
			</Head>
			<GlobalStyles />
			<Header />
			<Menu />
			<StyledMain style={{ minHeight: getRemainingMainHeight() }}>{children}</StyledMain>
		</Fragment>
	)
}

export default Layout

const getRemainingMainHeight = () => {
	if (typeof window === 'undefined') return 600
	const header = document.querySelector('header')
	const footer = document.querySelector('footer')
	return `calc(100vh - ${(header ? header.offsetHeight : 0) + (footer ? footer.offsetHeight : 0)}px)`
}
