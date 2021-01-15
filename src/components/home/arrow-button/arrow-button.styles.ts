import tw, { css, styled } from 'twin.macro'

import { ArrowButtonProps } from './arrow-button.component'

export const StyledArrowButton = styled.button(({ pointer }: ArrowButtonProps) => [
	tw`flex w-8 h-full rounded-xl`,
	tw`focus:outline-none`,
	tw`focus-visible:(border-gray-300 ring-1 ring-gray-300)`,
	css`
		> div {
			${tw`flex items-center justify-center w-full h-full bg-white dark:bg-gray-900`};
			${tw`rounded-xl border-2 border-gray-200 transition duration-300`};
			${tw`hover:bg-gray-200`};
			${tw`dark:hover:bg-gray-700`};
			${tw`dark:(border-gray-600 focus-visible:border-gray-500 active:border-gray-500)`};

			svg {
				${tw`w-4 h-4 text-gray-600 stroke-current dark:text-gray-100`};
			}
		}
	`,

	pointer === 'NEXT' && [
		css`
			svg {
				${tw`transform rotate-180`};
			}
		`,
	],
])
