import { FC } from 'react'
import Image from 'next/image'

import { Category } from '@/models/category'
import { StyledCategoryButton } from './category-button.styles'

export interface CategoryButtonProps {
	category: Category
	selectedCategory: string
	setSelectedCategory: (name: string) => void
}

const CategoryButton: FC<CategoryButtonProps> = (props) => {
	const { category: { id, name }, selectedCategory, setSelectedCategory } = props

	return (
		<StyledCategoryButton
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
		</StyledCategoryButton>
	)
}

export default CategoryButton
