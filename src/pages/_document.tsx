import { Fragment } from 'react'
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				})
			const initialProps = await Document.getInitialProps(ctx)

			return {
				...initialProps,
				styles: (
					<Fragment>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</Fragment>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang='en'>
				<HeadMeta />
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument

const HeadMeta = () => (
	<Fragment>
		<meta name='application-name' content='Food Delivery' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-status-bar-style' content='default' />
		<meta name='apple-mobile-web-app-title' content='Food Delivery' />
		<meta name='description' content='Best food delivery in the world' />
		<meta name='format-detection' content='telephone=no' />
		<meta name='mobile-web-app-capable' content='yes' />
		<meta name='msapplication-config' content='/browserconfig.xml' />
		<meta name='msapplication-TileColor' content='#2B5797' />
		<meta name='msapplication-tap-highlight' content='no' />
		<meta name='theme-color' content='#000000' />

		<link rel='apple-touch-icon' sizes='192x192' href='/icon-192x192.png' />
		<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
		<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
		<link rel='manifest' href='/manifest.json' />
		{/* <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' /> */}
		<link rel='shortcut icon' href='/favicon.ico' />

		<meta name='twitter:card' content='summary' />
		{/* <meta name='twitter:url' content='https://yourdomain.com' /> */}
		<meta name='twitter:title' content='Food Delivery' />
		<meta name='twitter:description' content='Best food delivery in the world' />
		{/* <meta name='twitter:image' content='https://yourdomain.com/android-chrome-192x192.png' /> */}
		<meta name='twitter:creator' content='@MouadMaa' />
		<meta property='og:type' content='website' />
		<meta property='og:title' content='Food Delivery' />
		<meta property='og:description' content='Best Food Delivery in the world' />
		<meta property='og:site_name' content='Food Delivery' />
		{/* <meta property='og:url' content='https://yourdomain.com' /> */}
		{/* <meta property='og:image' content='https://yourdomain.com/icon-192x192.png' /> */}
	</Fragment>
)
