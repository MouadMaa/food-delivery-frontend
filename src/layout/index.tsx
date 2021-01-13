import { FC, Fragment } from 'react'
import Head from 'next/head'
import tw from 'twin.macro'

import GlobalStyles from '@/styles/globalStyles'
import Header from './header'

const Layout: FC = ({ children }) => {
	return (
		<Fragment>
			{HtmlHead}
			<GlobalStyles />
			<Header />
			<Main>{children}</Main>
		</Fragment>
	)
}

export default Layout

const HtmlHead = (
	<Head>
		<meta charSet='UTF-8' />
		<meta name='viewport' content='width=device-width, initial-scale=1.0' />
		<meta httpEquiv='X-UA-Compatible' content='ie=edge' />

		<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' rel='stylesheet' />

		<title>Food Delivery</title>
	</Head>
)

const Main = tw.main`
	font-body text-md text-gray-700 bg-white px-2 md:px-6
`
