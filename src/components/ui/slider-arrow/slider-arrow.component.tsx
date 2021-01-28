import { FC } from 'react'
import KeenSlider from 'keen-slider'

import { StyledSliderArrow } from './slider-arrow.styles'
import { ArrowButtonSvg } from './slider-arrow.svg'

interface SliderButtonProps {
	arrow: 'PREV' | 'NEXT'
	slider: KeenSlider
	currentSlide: number
}

const SliderArrow: FC<SliderButtonProps> = (props) => {
	const { arrow, slider, currentSlide } = props

	const handleClick = () => (arrow === 'NEXT' ? slider.next() : slider.prev())

	// if (arrow === 'NEXT' && currentSlide === slider.details().size - 1) return null
	if (arrow === 'PREV' && currentSlide === 0) return null

	return (
		<StyledSliderArrow className='group' style={{ zIndex: 1 }} arrow={arrow} onClick={handleClick}>
			<div />
			<div>
				<div>
					<ArrowButtonSvg />
				</div>
			</div>
		</StyledSliderArrow>
	)
}

export default SliderArrow
