import { Fragment } from 'react'
import Head from 'next/head'
import tw, { styled } from 'twin.macro'

import GlobalStyle from '@/styles/globalStyles'

const Input = styled.input(({ hasHover }: { hasHover: boolean }) => [
	tw`text-sm text-primary-default border rounded`,
	hasHover && tw`hover:border-black`,
])

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Food Delivery</title>
			</Head>
			<GlobalStyle />
			<Input hasHover />
		</Fragment>
	)
}
