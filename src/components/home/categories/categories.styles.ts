import tw, { css, styled } from 'twin.macro'

export const StyledCategories = styled.section(() => [
	tw`relative mt-8`,
	css`
		h1 {
			${tw`text-lg md:text-xl tracking-wide mb-4 sm:mb-6 text-gray-600 dark:text-gray-50`};
		}
	`,
])
