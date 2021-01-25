import { FC } from 'react'
import Image from 'next/image'

import { StyledButtonCategory } from './button-category.styles'

export interface ButtonCategoryProps {
	id: number
	name: string
	isSelected: boolean
	setSelected: (name: string) => void
}

const ButtonCategory: FC<ButtonCategoryProps> = (props) => {
	const { id, name, isSelected, setSelected } = props

	return (
		<StyledButtonCategory
			className='keen-slider__slide'
			isSelected={isSelected}
			onClick={() => setSelected(!isSelected ? name : 'All')}
		>
			{id !== 1 && (
				<picture>
					<Image src={`/svg/${name.toLowerCase()}.svg`} alt={name} layout='fill' />
				</picture>
			)}
			<span>{name}</span>
		</StyledButtonCategory>
	)
}

export default ButtonCategory
