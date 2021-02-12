import tw, { css, styled } from 'twin.macro'

export const StyledAvatar = styled.button(() => [
	tw`flex items-center h-9 border-2 border-l-0 border-gray-200 rounded-2xl`,
	tw`transition-colors duration-300`,
	tw`focus:outline-none focus-visible:(border-gray-300 ring-1 ring-gray-300)`,
	tw`active:border-gray-300`,
	tw`dark:(border-gray-600 active:border-gray-500 focus-visible:border-gray-500)`,
	css`
		> div {
			${tw`w-9 h-full rounded-2xl transform scale-105`};

			img {
				${tw`w-full h-full object-cover`};
			}
		}

		p {
			${tw`pl-2 sm:pl-3 pr-2.5 sm:pr-3.5 text-sm font-medium text-gray-600 dark:text-gray-200`};
		}

		span {
			${tw`flex items-center justify-center w-10 h-8 border-2 border-gray-200 rounded-2xl transition-colors duration-300 transform scale-110 active:border-gray-300 dark:border-gray-600`};

			svg {
				${tw`w-5 h-5 text-gray-500 stroke-2 stroke-current dark:text-gray-300`};
			}
		}
	`,
])
