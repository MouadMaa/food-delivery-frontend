import tw, { css, styled } from 'twin.macro'

export const StyledDropdown = styled.div(({ isOpen }: { isOpen: boolean }) => [
	tw`
    absolute right-0 z-50 mt-2 w-60 bg-white rounded-xl shadow-md overflow-hidden transform origin-top-right transition duration-500 dark:bg-gray-800
  `,
	isOpen
		? [ tw`z-50 opacity-100 translate-y-0 scale-100` ]
		: [ tw`opacity-0 -translate-y-5 scale-75`, css`z-index: -10;` ],
	css`
		button {
			${tw`flex items-center justify-between w-full px-4 py-2 space-x-2 text-sm text-gray-600 tracking-wide transition-colors duration-300 hover:(bg-gray-200 text-gray-700) focus:outline-none dark:(text-gray-100 hover:bg-gray-700)`};

			svg {
				${tw`w-6 h-6 stroke-current`};
			}
		}
	`,
])

export const DropdownBackDrop = tw.div`
  fixed inset-0 z-50 h-full w-full bg-gray-900 bg-opacity-10
`
