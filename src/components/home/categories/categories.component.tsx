import { FC, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import { ArrowButton } from '@/components/ui'
import ButtonCategory from '../button-category/button-category.component'
import { categories } from './categories.data'
import { StyledCategories } from './categories.styles'

const Categories: FC = () => {
	const [ selectedCategory, setSelectedCategory ] = useState('All')
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
			<h1>What would you like to eat ?</h1>
			<nav className='keen-slider' ref={sliderRef}>
				{slider && <ArrowButton arrow='PREV' onClick={() => slider.prev()} disabled={currentSlide === 0} />}
				{categories.map((category) => (
					<ButtonCategory
						key={category.id}
						id={category.id}
						name={category.name}
						isSelected={selectedCategory === category.name}
						setSelected={setSelectedCategory}
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
