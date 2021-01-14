import tw, { css, styled } from 'twin.macro'

import { ArrowButtonProps } from './arrow-button.component'

export const StyledArrowButton = styled.button(({ pointer }: ArrowButtonProps) => [
	tw`flex w-10 h-full`,
	tw`focus:outline-none`,
	css`
		> div:first-child {
			${tw`w-2/6 h-full from-transparent to-white dark:to-gray-900`};
		}

		> div:last-child {
			${tw`flex items-center w-full h-full bg-white dark:bg-gray-900`};

			> div {
				${tw`flex items-center justify-center w-8 h-8 rounded-full transition duration-300`};
				${tw`hover:bg-gray-200`};
				${tw`dark:hover:bg-gray-700`};

				svg {
					${tw`w-4 h-4 text-gray-600 stroke-current dark:text-gray-100`};
				}
			}
		}
	`,

	pointer === 'PREV' && [
		tw`left-0 flex-row-reverse`,
		css`
			> div:first-child {
				${tw`bg-gradient-to-l`};
			}

			> div:last-child {
				${tw`justify-start`};
			}
		`,
	],

	pointer === 'NEXT' && [
		tw`right-0`,
		css`
			> div:first-child {
				${tw`bg-gradient-to-r`};
			}

			> div:last-child {
				${tw`justify-end`};

				div svg {
					${tw`transform rotate-180`};
				}
			}
		`,
	],
])
