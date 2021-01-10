import { FC } from 'react'
import tw from 'twin.macro'

import Burger from './burger/burger.component'

const Header: FC = () => {
	return (
		<StyledHeader>
			<LogoContainer>
				<Burger />
				<a href='#' tw='text-lg tracking-wide text-gray-600 dark:text-gray-200'>
					Food Delivery
				</a>
			</LogoContainer>
		</StyledHeader>
	)
}

export default Header

const StyledHeader = tw.header`
	font-body text-md text-gray-700 bg-white flex items-center justify-between h-16 px-4 md:(px-8 h-20) border-b-2 border-gray-200 dark:text-gray-50 dark:bg-gray-900 dark:border-gray-600
`

const LogoContainer = tw.div`
	flex items-center justify-between w-full md:w-auto md:space-x-3
`
