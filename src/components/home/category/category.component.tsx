import { FC } from 'react'
import Image from 'next/image'

import { StyledCategory } from './category.styles'

export interface CategoryProps {
	id: number
	name: string
	isSelected: boolean
	setSelected: (name: string) => void
}

const Category: FC<CategoryProps> = (props) => {
	const { id, name, isSelected, setSelected } = props

	return (
		<StyledCategory
			className='keen-slider__slide'
			isSelected={isSelected}
			onClick={() => setSelected(!isSelected ? name : 'All')}
		>
			{id !== 1 && (
				<picture>
					<Image src={`/svg/${name.toLowerCase()}.svg`} alt={name} layout='fill' />
				</picture>
			)}
			<span>{name}</span>
		</StyledCategory>
	)
}

export default Category
