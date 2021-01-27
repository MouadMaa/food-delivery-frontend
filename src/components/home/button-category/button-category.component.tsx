import { FC } from 'react'
import Image from 'next/image'

import { Category } from '@/models/category'
import { StyledButtonCategory } from './button-category.styles'

export interface ButtonCategoryProps {
	category: Category
	selectedCategory: string
	setSelectedCategory: (name: string) => void
}

const ButtonCategory: FC<ButtonCategoryProps> = (props) => {
	const { category: { id, name }, selectedCategory, setSelectedCategory } = props

	return (
		<StyledButtonCategory
			className='keen-slider__slide'
			isSelected={selectedCategory === id}
			onClick={() => setSelectedCategory(selectedCategory === id ? 'all' : id)}
		>
			{id !== 'all' && (
				<picture>
					<Image src={`/svg/${name.toLowerCase().replace(' ', '-')}.svg`} alt={name} layout='fill' />
				</picture>
			)}
			<span>{name}</span>
		</StyledButtonCategory>
	)
}

export default ButtonCategory
