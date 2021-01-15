import { FC } from 'react'
import Image from 'next/image'

import { StyledCategory } from './category.styles'

export interface CategoryProps {
	name: string
	isSelected: boolean
	setSelected: (name: string) => void
}

const Category: FC<CategoryProps> = (props) => {
	const { name, isSelected, setSelected } = props

	const handleClick = () => {
		if (isSelected) setSelected('')
		else setSelected(name)
	}

	return (
		<StyledCategory isSelected={isSelected} onClick={handleClick}>
			<picture>
				<Image src={`/svg/${name.toLowerCase()}.svg`} alt={name} layout='fill' />
			</picture>
			<span>{name}</span>
		</StyledCategory>
	)
}

export default Category
