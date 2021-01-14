import { FC, Fragment } from 'react'
import dynamic from 'next/dynamic'
import { slidesToShowPlugin, slidesToScrollPlugin, arrowsPlugin } from '@brainhubeu/react-carousel'
const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), { ssr: false })
import '@brainhubeu/react-carousel/lib/style.css'

import Category from '../category/category.component'
import ArrowButton from '../arrow-button/arrow-button.component'
import { categories } from './categories.data'
import { StyledCategories } from './categories.styles'

const Categories: FC = () => {
	return (
		<StyledCategories>
			<h1>What would you like to eat ?</h1>
			<Carousel
				plugins={[
					{
						resolve: slidesToShowPlugin,
						options: { numberOfSlides: 8 },
					},
					{
						resolve: slidesToScrollPlugin,
						options: { numberOfSlides: 3 },
					},
					{
						resolve: arrowsPlugin,
						options: {
							arrowLeft: <ArrowButton pointer='PREV' />,
							arrowRight: <ArrowButton pointer='NEXT' />,
							addArrowClickHandler: true,
						},
					},
				]}
			>
				{categories.map((category) => <Category key={category.id} category={category} />)}
			</Carousel>
		</StyledCategories>
	)
}

export default Categories
