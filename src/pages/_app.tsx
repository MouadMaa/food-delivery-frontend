import { FC, Fragment } from 'react'
import { AppProps } from 'next/app'

import TwinGlobalStyles from '@/styles/TwinGlobalStyles'
import Layout from '@/layout/index'

const MyApp: FC<AppProps> = (props) => {
	const { Component, pageProps } = props

	return (
		<Fragment>
			<TwinGlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Fragment>
	)
}

export default MyApp
