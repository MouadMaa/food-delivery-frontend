import { FC, Fragment } from 'react'
import Head from 'next/head'
import 'twin.macro'

import GlobalStyles from '@/styles/GlobalStyles'
import Header from './header'

const Layout: FC = ({ children }) => {
	return (
		<Fragment>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' rel='stylesheet' />
				<title>Food Delivery</title>
			</Head>
			<GlobalStyles />
			<Header />
			<main tw='font-body text-md text-gray-700 bg-white px-2 md:px-6'>{children}</main>
		</Fragment>
	)
}

export default Layout
