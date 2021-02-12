import { FC, useEffect } from 'react'

import { useSelectedCategoryState, defaultSelectedCategory, useCategoriesState } from '@/store/category/category.state'
import { Category } from '@/store/category/category.types'
import CategoryButton from '../category-button/category-button.component'
import { StyledCategories } from './categories.styles'

interface CategoriesProps {
	categories: Category[]
}

const Categories: FC<CategoriesProps> = (props) => {
	const [ categories, setCategories ] = useCategoriesState()
	const [ selectedCategory, setSelectedCategory ] = useSelectedCategoryState()

	useEffect(
		() => {
			setCategories(props.categories.length > categories.length ? props.categories : categories)
		},
		[ props ],
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
