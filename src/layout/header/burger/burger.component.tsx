import { FC } from 'react'

import { IconButton } from '@/components/ui'
import { StyledBurger } from './burger.styles'

interface BurgerProps {
	onClick: () => void
}

const Burger: FC<BurgerProps> = (props) => {
	const { onClick } = props

	return (
		<IconButton onClick={onClick}>
			<StyledBurger>
				<div />
				<div />
				<div />
			</StyledBurger>
		</IconButton>
	)
}

export default Burger
