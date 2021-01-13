import { FC } from 'react'

import Category from '../category/category.component'
import { categories } from './categories.data'
import { StyledCategories } from './categories.styles'

const Categories: FC = () => {
	return (
		<StyledCategories>
			<nav>{categories.map((category) => <Category key={category.id} category={category} />)}</nav>
		</StyledCategories>
	)
}

export default Categories
