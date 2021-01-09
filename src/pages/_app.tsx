import { Fragment } from 'react'
import { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<GlobalStyles />
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp
