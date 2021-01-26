import React, { FC } from 'react'
import Link from 'next/link'

import { StyledLogo } from './logo.styles'

const Logo: FC = () => {
	return (
		<Link href='/'>
			<StyledLogo>Food Delivery</StyledLogo>
		</Link>
	)
}

export default Logo
