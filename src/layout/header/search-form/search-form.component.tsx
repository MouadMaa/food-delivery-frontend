import React, { FC } from 'react'
import 'twin.macro'

import { IconButton, Loader } from '@/components/ui'
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

					<div tw='absolute left-0 top-10 w-80 z-50 p-4 bg-gray-50 rounded-xl overflow-hidden shadow-lg transform -translate-x-4 dark:bg-gray-800'>
						<Loader />
					</div>
				</div>
			</FormContainer>
			<IconButton onClick={() => {}}>
				<FilterSvg />
			</IconButton>
		</StyledSearchForm>
	)
}

export default SearchForm
