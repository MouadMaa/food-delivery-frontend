import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectedCategorySelector } from '@/store/category/category.selectors'
import { selectCategory } from '@/store/category/category.actions'
import { Category } from '@/store/category/category.types'
import { useCategoriesValue } from '@/store/category/category.state'
import CategoryButton from '../category-button/category-button.component'
import { StyledCategories } from './categories.styles'

const Categories: FC = () => {
	const dispatch = useDispatch()
	const selectedCategory = useSelector(selectedCategorySelector)

	const categories = useCategoriesValue()

	const setSelectedCategory = (category: Category) => dispatch(selectCategory(category))

	return (
		<StyledCategories>
			<h1>Hungry? You're in the right place</h1>
			<nav>
				<CategoryButton
					category={firstCategory}
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

const firstCategory = {
	id: 'all',
	name: 'All',
	image: '',
}
