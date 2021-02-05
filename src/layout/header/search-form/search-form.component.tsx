import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { IconButton } from '@/components/ui'
import { useDebounce } from '@/hooks/useDebounce'
import { Category } from '@/store/category/category.types'
import { Restaurant } from '@/store/restaurant/restaurant.types'
import { searchForCategoriesAndRestaurantsAsync } from '@/store/app/app.firebase'
import SearchDropdown from '../search-dropdown/search-dropdown.component'
import { StyledSearchForm, FormContainer } from './search-form.styles'
import { AddressSvg, FilterSvg, SearchSvg } from './search-form.svg'

export interface SearchResults {
	categories: Category[]
	restaurants: Restaurant[]
}

const SearchForm: FC = () => {
	const dispatch = useDispatch()

	const [ searchTerm, setSearchTerm ] = useState('')
	const [ isSearching, setIsSearching ] = useState(false)
	const [ results, setResults ] = useState<SearchResults>(null)

	const debouncedSearchTerm = useDebounce(searchTerm, 300)

	useEffect(
		() => {
			if (debouncedSearchTerm) {
				setIsSearching(true)
				dispatch(searchForCategoriesAndRestaurantsAsync(debouncedSearchTerm))
				setIsSearching(false)
				setResults(null)
			}
		},
		[ debouncedSearchTerm ],
	)

	const handleChange = (event: React.FormEvent<HTMLInputElement>) => setSearchTerm(event.currentTarget.value)

	return (
		<StyledSearchForm>
			<FormContainer>
				<div>
					<AddressSvg />
					<input type='text' value='Larache' disabled />
				</div>
				<div>
					<SearchSvg />
					<input type='text' value={searchTerm} onChange={handleChange} placeholder='Search..' />
					<SearchDropdown />
				</div>
			</FormContainer>
			<IconButton onClick={() => {}}>
				<FilterSvg />
			</IconButton>
		</StyledSearchForm>
	)
}

export default SearchForm
