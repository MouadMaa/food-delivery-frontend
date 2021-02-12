import { FC } from 'react'

import { useSetSelectedCategoryState } from '@/store/category/category.state'
import { Category } from '@/store/category/category.types'
import { Loader } from '@/components/ui'
import { StyledSearchDropdown } from './search-dropdown.styles'
import { SearchResults } from '../search-form/search-form.component'
import { useSetSideMenuState } from '@/store/app/app.state'

interface SearchDropdownProps {
	results: SearchResults
	isSearching: boolean
	searchTerm: string
	setSearchTerm: (value: string) => void
}

const SearchDropdown: FC<SearchDropdownProps> = (props) => {
	const { results: { categories, restaurants }, isSearching, searchTerm, setSearchTerm } = props

	const setSelectedCategory = useSetSelectedCategoryState()
	const setIsSideMenuOpen = useSetSideMenuState()

	const handleCategoryClick = (category: Category) => {
		setSelectedCategory(category)
		setIsSideMenuOpen(false)
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
