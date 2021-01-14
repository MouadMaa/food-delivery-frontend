import { FC } from 'react'
import Image from 'next/image'

import { StyledCategory } from './category.styles'

interface CategoryProps {
	category: {
		id: number
		name: string
	}
}

const Category: FC<CategoryProps> = (props) => {
	const { category: { id, name } } = props

	return (
		<StyledCategory>
			<picture>
				<Image src={`/svg/${name.toLowerCase()}.svg`} alt={name} layout='fill' />
			</picture>
			<span>{name}</span>
		</StyledCategory>
	)
}

export default Category
