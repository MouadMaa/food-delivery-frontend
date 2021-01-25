import tw, { css, styled } from 'twin.macro'

export const StyledArrowButton = styled.button(({ arrow }: { arrow: 'PREV' | 'NEXT' }) => [
	tw`absolute top-0 flex w-12 h-full focus:outline-none`,
	css`
		> div:first-child {
			${tw`w-2/6 h-full from-transparent to-white dark:to-gray-900`};
		}
		> div:last-child {
			${tw`flex items-center w-full h-full bg-white dark:bg-gray-900`};

			div {
				${tw`flex items-center justify-center w-8 h-8 rounded-full transition duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-700`};

				svg {
					${tw`w-4 h-4 text-gray-600 stroke-current dark:text-gray-100`};
				}
			}
		}
	`,

	arrow === 'PREV' && [
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

	arrow === 'NEXT' && [
		tw`right-0`,
		css`
			> div:first-child {
				${tw`bg-gradient-to-r`};
			}
			> div:last-child {
				${tw`justify-end`};

				svg {
					${tw`transform rotate-180`};
				}
			}
		`,
	],
])
