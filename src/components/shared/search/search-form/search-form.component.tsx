import React, { FC, useEffect, useRef, useState } from 'react'

import { Category } from '@/store/category/category.types'
import { Restaurant } from '@/store/restaurant/restaurant.types'
import { useDebounce } from '@/hooks/useDebounce'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { Dropdown, IconButton } from '@/components/ui'
import SearchDropdown from '../search-dropdown/search-dropdown.component'
import { StyledSearchForm, FormContainer } from './search-form.styles'
import { AddressSvg, FilterSvg, SearchSvg } from './search-form.svg'
import { searchForCategories, searchForRestaurants } from './search-form.utils'

interface SearchFormProps {
  isHeader?: boolean
}

const SearchForm: FC<SearchFormProps> = (props) => {
  const { isHeader = false } = props

  const ref = useRef(null)
  useOnClickOutside(ref, () => setSearchTerm(''))

  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(true)
  const [results, setResults] = useState<SearchResults>(initResults)

  const [isDropdownFilterOpen, setIsDropdownFilterOpen] = useState(false)
  const [filterBy, setFilterBy] = useState('All')

  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    ;(async () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        setResults({
          categories:
            filterBy !== 'Restaurant' ? await searchForCategories(debouncedSearchTerm) : [],
          restaurants:
            filterBy !== 'Category' ? await searchForRestaurants(debouncedSearchTerm) : [],
        })
        setIsSearching(false)
      } else {
        setIsSearching(true)
        setResults(initResults)
      }
    })()
  }, [debouncedSearchTerm, filterBy])

  const onSelect = (item: string) => setFilterBy(item)

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchTerm(event.currentTarget.value)

  return (
    <StyledSearchForm ref={ref}>
      <FormContainer>
        <div>
          <AddressSvg />
          <label htmlFor={`address-input${isHeader ? '-header' : ''}`} />
          <input
            id={`address-input${isHeader ? '-header' : ''}`}
            type='text'
            value='Larache'
            disabled
          />
        </div>
        <div>
          <SearchSvg />
          <label htmlFor={`search-input${isHeader ? '-header' : ''}`} />
          <input
            id={`search-input${isHeader ? '-header' : ''}`}
            type='text'
            value={searchTerm}
            onChange={handleChange}
            placeholder='Search..'
          />
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

export interface SearchResults {
  categories: Category[]
  restaurants: Restaurant[]
}

const initResults: SearchResults = {
  categories: [],
  restaurants: [],
}

const itemsDropdownFilter = ['All', 'Category', 'Restaurant']
