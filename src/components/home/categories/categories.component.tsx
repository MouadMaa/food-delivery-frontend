import { FC, useEffect } from 'react'

import {
	useSetCategoriesState,
	useSelectedCategoryState,
	defaultSelectedCategory,
} from '@/store/category/category.state'
import { Category } from '@/store/category/category.types'
import CategoryButton from '../category-button/category-button.component'
import { StyledCategories } from './categories.styles'

interface CategoriesProps {
	categories: Category[]
}

const Categories: FC<CategoriesProps> = (props) => {
	const { categories } = props

	const setCategories = useSetCategoriesState()
	const [ selectedCategory, setSelectedCategory ] = useSelectedCategoryState()

	useEffect(
		() => {
			setCategories(categories)
		},
		[ categories ],
	)

	return (
		<StyledCategories>
			<h1>Hungry? You're in the right place</h1>
			<nav>
				<CategoryButton
					category={defaultSelectedCategory}
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				{categories.map((category, index) => (
					<CategoryButton
						key={index}
						category={category}
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
				))}
			</nav>
		</StyledCategories>
	)
}

export default Categories
