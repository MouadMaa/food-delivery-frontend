import { FC } from 'react'

import { IconButton } from '@/components/ui'
import { StyledBurger } from './burger.styles'

const Burger: FC = () => {
	return (
		<IconButton>
			<StyledBurger>
				<div />
				<div />
				<div />
			</StyledBurger>
		</IconButton>
	)
}

export default Burger
