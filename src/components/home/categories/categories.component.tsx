import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { categoriesSelector, selectedCategorySelector } from '@/store/category/category.selectors'
import { selectCategory } from '@/store/category/category.actions'
import { Category } from '@/store/category/category.types'
import CategoryButton from '../category-button/category-button.component'
import { StyledCategories } from './categories.styles'

const Categories: FC = () => {
	const dispatch = useDispatch()
	const categories = useSelector(categoriesSelector)
	const selectedCategory = useSelector(selectedCategorySelector)

	const setSelectedCategory = (category: Category) => dispatch(selectCategory(category))

	return (
		<StyledCategories>
			<h1>Hungry? You're in the right place</h1>
			<nav>
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
