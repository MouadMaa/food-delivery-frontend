import { IconButton } from '@/components/ui'
import React, { FC } from 'react'

import { StyledSearchForm, FormContainer } from './search-form.styles'
import { AddressSvg, FilterSvg, SearchSvg } from './search-form.svg'

const SearchForm: FC = () => {
	return (
		<StyledSearchForm>
			<FormContainer>
				<div>
					<AddressSvg />
					<input type='text' value='Larache' disabled />
				</div>
				<div>
					<SearchSvg />
					<input type='text' placeholder='Search..' />
				</div>
			</FormContainer>
			<IconButton>
				<FilterSvg />
			</IconButton>
		</StyledSearchForm>
	)
}

export default SearchForm
