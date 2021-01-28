import { FC, Fragment } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import TwinGlobalStyles from '@/styles/TwinGlobalStyles'
import Layout from '@/layout/index'
import { useStore } from '../redux/store'

const MyApp: FC<AppProps> = (props) => {
	const { Component, pageProps } = props

	const store = useStore(pageProps.initialReduxState)

	return (
		<Fragment>
			<TwinGlobalStyles />
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</Fragment>
	)
}

export default MyApp
