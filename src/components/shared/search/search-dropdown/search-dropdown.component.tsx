import { FC } from 'react'
import { useRouter } from 'next/router'

import { useSetSelectedCategoryState } from '@/store/category/category.state'
import { useSetSideMenuState } from '@/store/global/global.state'
import { Category } from '@/store/category/category.types'
import { Restaurant } from '@/store/restaurant/restaurant.types'
import { Loader } from '@/components/ui'
import { StyledSearchDropdown } from './search-dropdown.styles'
import { SearchResults } from '../search-form/search-form.component'

interface SearchDropdownProps {
  results: SearchResults
  isSearching: boolean
  searchTerm: string
  setSearchTerm: (value: string) => void
}

const SearchDropdown: FC<SearchDropdownProps> = (props) => {
  const {
    results: { categories, restaurants },
    isSearching,
    searchTerm,
    setSearchTerm,
  } = props

  const router = useRouter()

  const setSelectedCategory = useSetSelectedCategoryState()
  const setIsSideMenuOpen = useSetSideMenuState()

  const handleCategoryClick = (category: Category) => {
    router.pathname !== '/' && router.push('/')
    setSelectedCategory(category)
    setIsSideMenuOpen(false)
    setSearchTerm('')
  }

  const handleRestaurantClick = (restaurant: Restaurant) => {
    const path = `/restaurant/${restaurant.slug}`
    router.pathname !== path && router.push(path)
    setIsSideMenuOpen(false)
    setSearchTerm('')
  }

  return searchTerm ? (
    <StyledSearchDropdown>
      {isSearching && <Loader />}
      {!isSearching && !!categories.length && (
        <article>
          <span>Categories</span>
          {categories.map((category) => (
            <div key={category.id} onClick={() => handleCategoryClick(category)}>
              {category.name}
            </div>
          ))}
        </article>
      )}
      {!isSearching && !!restaurants.length && (
        <article>
          <span>Restaurants</span>
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} onClick={() => handleRestaurantClick(restaurant)}>
              {restaurant.name}
            </div>
          ))}
        </article>
      )}
      {!isSearching && !categories.length && !restaurants.length && <p>No results were found!</p>}
    </StyledSearchDropdown>
  ) : null
}

export default SearchDropdown
