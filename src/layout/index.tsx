import { FC, Fragment, useState } from 'react'
import Head from 'next/head'
import 'twin.macro'

import GlobalStyles from '@/styles/GlobalStyles'
import Header from './header'
import Menu from './menu/menu.component'

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
			<main tw='font-body text-md text-gray-700 bg-white px-2 md:px-6'>{children}</main>
			{isOpenMenu && (
				<div tw='fixed inset-0 z-40' className='backdrop-blur' onClick={() => setIsOpenMenu(!isOpenMenu)} />
			)}
		</Fragment>
	)
}

export default Layout
