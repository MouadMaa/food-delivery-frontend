import { FC, useState } from 'react'
import { useSelector } from 'react-redux'

import { categoriesSelector } from '@/store/category/category.selectors'
import CategoryButton from '../category-button/category-button.component'
import { StyledCategories } from './categories.styles'

const Categories: FC = () => {
	const categories = useSelector(categoriesSelector)

	const [ selectedCategory, setSelectedCategory ] = useState('all')

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
