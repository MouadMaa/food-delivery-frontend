import { FC, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import { ArrowButton } from '@/components/ui'
import ButtonCategory from '../button-category/button-category.component'
import { Category } from '@/models/category'
import { StyledCategories } from './categories.styles'

interface CategoriesProps {
	categories: Category[]
}

const Categories: FC<CategoriesProps> = (props) => {
	const { categories } = props

	const [ selectedCategory, setSelectedCategory ] = useState('all')
	const [ currentSlide, setCurrentSlide ] = useState(0)

	const [ sliderRef, slider ] = useKeenSlider({
		spacing: 16,
		slidesPerView: 2,
		mode: 'free',
		breakpoints,
		slideChanged: (slide) => setCurrentSlide(slide.details().relativeSlide),
	})

	return (
		<StyledCategories>
			<h1>Hungry? You're in the right place</h1>
			<nav className='keen-slider' ref={sliderRef}>
				{slider && <ArrowButton arrow='PREV' onClick={() => slider.prev()} disabled={currentSlide === 0} />}
				<ButtonCategory
					category={allCategory}
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				{categories.map((category) => (
					<ButtonCategory
						key={category.id}
						category={category}
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
				))}
				{slider && (
					<ArrowButton
						arrow='NEXT'
						onClick={() => slider.next()}
						disabled={currentSlide === slider.details().size - 1}
					/>
				)}
			</nav>
		</StyledCategories>
	)
}

export default Categories

const allCategory: Category = {
	id: 'all',
	name: 'All',
}

const breakpoints = {
	'(min-width: 400px)': {
		slidesPerView: 3,
	},
	'(min-width: 600px)': {
		slidesPerView: 4,
	},
	'(min-width: 800px)': {
		slidesPerView: 6,
	},
	'(min-width: 1000px)': {
		slidesPerView: 7,
	},
	'(min-width: 1200px)': {
		slidesPerView: 8,
	},
	'(min-width: 1400px)': {
		slidesPerView: 10,
	},
}
