import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { Loader } from '@/components/ui'
import { Category } from '@/store/category/category.types'
import { selectCategory } from '@/store/category/category.actions'
import { StyledSearchDropdown } from './search-dropdown.styles'
import { SearchResults } from '../search-form/search-form.component'

interface SearchDropdownProps {
	results: SearchResults
	isSearching: boolean
	searchTerm: string
	setSearchTerm: (value: string) => void
}

const SearchDropdown: FC<SearchDropdownProps> = (props) => {
	const { results: { categories, restaurants }, isSearching, searchTerm, setSearchTerm } = props

	const dispatch = useDispatch()

	const handleCategoryClick = (category: Category) => {
		dispatch(selectCategory(category))
		setSearchTerm('')
	}

	return (
		searchTerm && (
			<StyledSearchDropdown>
				{isSearching && <Loader />}
				{!isSearching &&
				!!categories.length && (
					<article>
						<span>Categories</span>
						{categories.map((category) => (
							<div key={category.id} onClick={() => handleCategoryClick(category)}>
								{category.name}
							</div>
						))}
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
	)
}

export default SearchDropdown
