import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import { SliderArrow } from '@/components/ui'
import CategoryButton from '../category-button/category-button.component'
import { RootState } from 'redux/reducers'
import { StyledCategories } from './categories.styles'

const Categories: FC = () => {
	const { categories } = useSelector((state: RootState) => state.category)

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
				{categories.map((category, index) => (
					<CategoryButton
						key={index}
						category={category}
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
				))}
				<SliderArrow arrow='PREV' slider={slider} currentSlide={currentSlide} />
				<SliderArrow arrow='NEXT' slider={slider} currentSlide={currentSlide} />
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
