import { FC, useState } from 'react'

import { useSortRestaurantsByState } from '@/store/restaurant/restaurant.state'
import { Dropdown } from '@/components/ui'
import { StyledSortBy } from './sort-restaurants-by.styles'
import { SortBySvg } from './sort-restaurants-by.svg'
import { sortRestaurantsByList } from './sort-restaurants-by.data'

const SortRestaurantsBy: FC = () => {
  const [sortRestaurantsBy, setSortRestaurantsBy] = useSortRestaurantsByState()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const onSelect = (name: string) => {
    const sortBy = sortRestaurantsByList.find((sortBy) => sortBy.title === name)
    if (sortBy) setSortRestaurantsBy(sortBy)
  }

  const dropdownList = sortRestaurantsByList.map((sortBy) => sortBy.title)

  return (
    <StyledSortBy>
      <div>
        <span>Sort by:</span>
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span>{sortRestaurantsBy.title}</span>
          <SortBySvg />
        </button>
      </div>

      <Dropdown
        show={isDropdownOpen}
        onHide={() => setIsDropdownOpen(false)}
        items={dropdownList}
        onSelect={onSelect}
        selectedItem={sortRestaurantsBy.title}
        withCheckMark
      />
    </StyledSortBy>
  )
}

export default SortRestaurantsBy
