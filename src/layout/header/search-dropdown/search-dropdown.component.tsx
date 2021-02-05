import { FC } from 'react'

import { Loader } from '@/components/ui'
import { StyledSearchDropdown } from './search-dropdown.styles'
import { SearchResults } from '../search-form/search-form.component'

interface SearchDropdownProps {
	results: SearchResults
	isSearching: boolean
}

const SearchDropdown: FC<SearchDropdownProps> = (props) => {
	const { results: { categories, restaurants }, isSearching } = props

	return (
		<StyledSearchDropdown>
			{isSearching && <Loader />}
			{!isSearching &&
			!!categories.length && (
				<article>
					<span>Categories</span>
					{categories.map((category) => <div key={category.id}>{category.name}</div>)}
				</article>
			)}
			{!isSearching &&
			!!restaurants.length && (
				<article>
					<span>Restaurants</span>
					{restaurants.map((restaurant) => <div key={restaurant.id}>{restaurant.name}</div>)}
				</article>
			)}
			{!isSearching && !categories.length && !restaurants.length && <p>No results were found!</p>}
		</StyledSearchDropdown>
	)
}

export default SearchDropdown
