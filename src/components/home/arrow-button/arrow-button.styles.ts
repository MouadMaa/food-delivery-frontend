import tw, { css, styled } from 'twin.macro'

import { ArrowButtonProps } from './arrow-button.component'

export const StyledArrowButton = styled.button(({ pointer }: ArrowButtonProps) => [
	tw`flex w-8 h-full`,
	tw`focus:outline-none`,
	css`
		> div {
			${tw`flex items-center justify-center w-full h-full bg-white rounded-xl dark:bg-gray-900`};
			${tw`transition duration-300`};
			${tw`hover:bg-gray-200`};
			${tw`dark:hover:bg-gray-700`};

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
