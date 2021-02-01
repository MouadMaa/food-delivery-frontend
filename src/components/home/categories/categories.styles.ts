import tw, { css, styled } from 'twin.macro'

export const StyledCategories = styled.section(() => [
	tw`pt-8`,
	css`
		h1 {
			${tw`text-lg md:text-xl tracking-wide mb-2 sm:mb-4 text-gray-600 dark:text-gray-100`};
		}
		nav {
			${tw`flex items-center py-3 space-x-3 sm:space-x-6 text-gray-600 overflow-auto`};
		}
	`,
])
