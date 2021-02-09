import tw, { css, styled } from 'twin.macro'

export const StyledAvatar = styled.button(() => [
	tw`flex items-center h-9 border-2 border-l-0 border-gray-200 rounded-2xl`,
	tw`transition-colors duration-300`,
	tw`focus:outline-none focus-visible:(border-gray-300 ring-1 ring-gray-300)`,
	tw`active:border-gray-300`,
	tw`dark:(border-gray-600 active:border-gray-500 focus-visible:border-gray-500)`,
	css`
		img {
			${tw`w-9 h-full transform scale-105 object-cover rounded-2xl`};
		}
		span {
			${tw`pl-2 pr-2.5 text-sm font-medium text-gray-600 dark:text-gray-200`};
		}
	`,
])
