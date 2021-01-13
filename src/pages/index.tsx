import { FC, Fragment } from 'react'
import tw from 'twin.macro'

import Categories from '@/components/home/categories/categories.component'

const Home: FC = () => {
	return (
		<Fragment>
			<Heading>What would you like to eat ?</Heading>
			<Categories />
		</Fragment>
	)
}

export default Home

const Heading = tw.h1`
	text-lg md:text-xl tracking-wide mt-8 text-gray-600 dark:text-gray-50
`
