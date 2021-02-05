import tw, { css, styled } from 'twin.macro'

export const StyledSearchDropdown = styled.div(() => [
	tw`absolute left-0 top-12 w-80 p-4 space-y-3 bg-gray-50 rounded-xl overflow-hidden shadow-lg transform -translate-x-5 dark:bg-gray-800`,
	css`
		article span {
			${tw`text-primary-dark dark:text-primary-default`};
		}
		article div {
			${tw`tracking-wider text-gray-600 py-1 px-3 cursor-pointer rounded-lg transition-colors duration-300 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700`};
		}
	`,
])
