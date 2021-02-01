import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import TwinGlobalStyles from '@/styles/TwinGlobalStyles'
import { storeWrapper } from '@/store/store'
import Layout from '@/layout/layout.component'

const MyApp: FC<AppProps> = (props) => {
	const { Component, pageProps } = props

	return (
		<ThemeProvider attribute='class'>
			<TwinGlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default storeWrapper.withRedux(MyApp)
