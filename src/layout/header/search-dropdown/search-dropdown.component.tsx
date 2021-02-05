import { FC } from 'react'

import { Loader } from '@/components/ui'
import { StyledSearchDropdown } from './search-dropdown.styles'

const SearchDropdown: FC = () => {
	return (
		<StyledSearchDropdown>
			<Loader />
		</StyledSearchDropdown>
	)
}

export default SearchDropdown
