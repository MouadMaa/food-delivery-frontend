import { FC, useState } from 'react'

import { Dropdown } from '@/components/ui'
import { StyledSortBy } from './sort-by.styles'
import { SortBySvg } from './sort-by.svg'

const SortBy: FC = () => {
	const [ isOpenDropdown, setIsOpenDropdown ] = useState(false)
	const [ sortBy, setSortBy ] = useState('Popularity')

	const itemsDropdown = [
		'Popularity',
		'Price (Low to high)',
		'Price (High to low)',
		'Duration (Low to high)',
		'Duration (High to low)',
	]

	return (
		<StyledSortBy>
			<div>
				<span>Sort by:</span>
				<button onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
					<span>{sortBy}</span>
					<SortBySvg />
				</button>
			</div>

			<Dropdown
				isOpen={isOpenDropdown}
				close={() => setIsOpenDropdown(false)}
				items={itemsDropdown}
				onSelect={setSortBy}
			/>
		</StyledSortBy>
	)
}

export default SortBy
