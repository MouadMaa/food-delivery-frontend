import { FC } from 'react'
import Image from 'next/image'

import { Category } from '@/store/category/category.types'
import { StyledCategoryButton } from './category-button.styles'

export interface CategoryButtonProps {
	category: Category
	selectedCategory: Category
	setSelectedCategory: (category: Category) => void
}

const CategoryButton: FC<CategoryButtonProps> = (props) => {
	const { category, selectedCategory, setSelectedCategory } = props

	const isSelected = selectedCategory.id === category.id
	const handleClick = () => !isSelected && setSelectedCategory(category)

	return (
		<StyledCategoryButton isSelected={isSelected} onClick={handleClick}>
			{category.id !== 'all' && (
				<picture>
					<Image src={category.image} alt={category.name} layout='fill' objectFit='cover' />
				</picture>
			)}
			<span>{category.name}</span>
		</StyledCategoryButton>
	)
}

export default CategoryButton
