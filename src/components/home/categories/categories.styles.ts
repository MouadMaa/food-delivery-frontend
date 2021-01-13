import tw, { css, styled } from 'twin.macro'

export const StyledCategories = styled.section(() => [
	tw`relative mt-4 sm:mt-6`,
	css`
		nav {
			${tw`flex justify-between space-x-2 p-1 overflow-x-hidden sm:space-x-4`};
		}
	`,
])
