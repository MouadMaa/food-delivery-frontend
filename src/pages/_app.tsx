import { Fragment } from 'react'
import { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

import Layout from '@/layout/index'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Fragment>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Fragment>
	)
}

export default MyApp
