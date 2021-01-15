import { FC, useState } from 'react'
import Carousel, { RenderArrowProps } from 'react-elastic-carousel'

import Category from '../category/category.component'
import ArrowButton from '../arrow-button/arrow-button.component'
import { categories } from './categories.data'
import { StyledCategories } from './categories.styles'

const Categories: FC = () => {
	const [ selectedCategory, setSelectedCategory ] = useState('')

	const myArrow = ({ type, onClick }: RenderArrowProps) => <ArrowButton pointer={type} onClick={onClick} />

	return (
		<StyledCategories>
			<h1>What would you like to eat ?</h1>
			<Carousel isRTL={false} renderArrow={myArrow} breakPoints={breakPoints}>
				{categories.map((category) => (
					<Category
						key={category.id}
						name={category.name}
						isSelected={selectedCategory === category.name}
						setSelected={setSelectedCategory}
					/>
				))}
			</Carousel>
		</StyledCategories>
	)
}

export default Categories

const breakPoints = [
	{ width: 100, itemsToShow: 1 },
	{ width: 200, itemsToShow: 2 },
	{ width: 350, itemsToShow: 3, itemsToScroll: 2 },
	{ width: 500, itemsToShow: 4, itemsToScroll: 2 },
	{ width: 600, itemsToShow: 5, itemsToScroll: 2 },
	{ width: 700, itemsToShow: 6, itemsToScroll: 2 },
	{ width: 1000, itemsToShow: 8, itemsToScroll: 2 },
	{ width: 1300, itemsToShow: 10, itemsToScroll: 2 },
]
