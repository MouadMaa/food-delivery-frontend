import { FC, useState } from 'react'

import { useSortRestaurantsByState } from '@/store/restaurant/restaurant.state'
import { Dropdown } from '@/components/ui'
import { StyledSortBy } from './sort-restaurants-by.styles'
import { SortBySvg } from './sort-restaurants-by.svg'
import { sortRestaurantsByList } from './sort-restaurants-by.data'

const SortRestaurantsBy: FC = () => {
	const [ sortRestaurantsBy, setSortRestaurantsBy ] = useSortRestaurantsByState()

	const [ isDropdownOpen, setIsDropdownOpen ] = useState(false)

	const onSelect = (name: string) => setSortRestaurantsBy(sortRestaurantsByList.find((sortBy) => sortBy.name === name))

	const dropdownList = sortRestaurantsByList.map((sortBy) => sortBy.name)

	return (
		<StyledSortBy>
			<div>
				<span>Sort by:</span>
				<button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
					<span>{sortRestaurantsBy.name}</span>
					<SortBySvg />
				</button>
			</div>

			<Dropdown
				isOpen={isDropdownOpen}
				onHide={() => setIsDropdownOpen(false)}
				items={dropdownList}
				onSelect={onSelect}
				selectedItem={sortRestaurantsBy.name}
				withCheckMark
			/>
		</StyledSortBy>
	)
}

export default SortRestaurantsBy
