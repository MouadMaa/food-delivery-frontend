import React, { FC, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { Dropdown, IconButton } from '@/components/ui'
import { useDebounce } from '@/hooks/useDebounce'
import { Category } from '@/store/category/category.types'
import { Restaurant } from '@/store/restaurant/restaurant.types'
import { categoriesSelector } from '@/store/category/category.selectors'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import SearchDropdown from '../search-dropdown/search-dropdown.component'
import { StyledSearchForm, FormContainer } from './search-form.styles'
import { AddressSvg, FilterSvg, SearchSvg } from './search-form.svg'
import { searchForCategories, searchForRestaurants } from './search-form.utils'

export interface SearchResults {
	categories: Category[]
	restaurants: Restaurant[]
}

const SearchForm: FC = () => {
	const categories = useSelector(categoriesSelector)

	const ref = useRef()
	useOnClickOutside(ref, () => setSearchTerm(''))

	const [ searchTerm, setSearchTerm ] = useState('')
	const [ isSearching, setIsSearching ] = useState(true)
	const [ results, setResults ] = useState<SearchResults>(initResults)

	const [ isDropdownFilterOpen, setIsDropdownFilterOpen ] = useState(false)
	const [ filterBy, setFilterBy ] = useState('All')

	const debouncedSearchTerm = useDebounce(searchTerm, 300)

	useEffect(
		() => {
			;(async () => {
				if (debouncedSearchTerm) {
					setIsSearching(true)
					setResults({
						categories: filterBy !== 'Restaurant' ? searchForCategories(categories, debouncedSearchTerm) : [],
						restaurants: filterBy !== 'Category' ? await searchForRestaurants(debouncedSearchTerm) : [],
					})
					setIsSearching(false)
				} else {
					setIsSearching(true)
					setResults(initResults)
				}
			})()
		},
		[ debouncedSearchTerm ],
	)

	const onSelect = (item: string) => setFilterBy(item)
	const handleChange = (event: React.FormEvent<HTMLInputElement>) => setSearchTerm(event.currentTarget.value)

	return (
		<StyledSearchForm ref={ref}>
			<FormContainer>
				<div>
					<AddressSvg />
					<input type='text' value='Larache' disabled />
				</div>
				<div>
					<SearchSvg />
					<input type='text' value={searchTerm} onChange={handleChange} placeholder='Search..' />
					<SearchDropdown
						results={results}
						isSearching={isSearching}
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
				</div>
			</FormContainer>
			<div>
				<IconButton onClick={() => setIsDropdownFilterOpen(true)}>
					<FilterSvg />
				</IconButton>
				<Dropdown
					isOpen={isDropdownFilterOpen}
					onHide={() => setIsDropdownFilterOpen(false)}
					items={itemsDropdownFilter}
					onSelect={onSelect}
					selectedItem={filterBy}
					withCheckMark
				/>
			</div>
		</StyledSearchForm>
	)
}

export default SearchForm

const initResults: SearchResults = {
	categories: [],
	restaurants: [],
}

const itemsDropdownFilter = [ 'All', 'Category', 'Restaurant' ]
