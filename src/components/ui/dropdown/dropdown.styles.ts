import tw, { css, styled } from 'twin.macro'

export const StyledDropdown = styled.div(() => [
	tw`
    absolute right-0 z-50 mt-2 w-60 bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-800
  `,
	css`
		button {
			${tw`flex items-center justify-between w-full px-4 py-2 space-x-2 text-sm text-gray-600 tracking-wide transition-colors duration-300 hover:(bg-gray-100 text-gray-700) focus:outline-none dark:(text-gray-100 hover:bg-gray-700)`};

			svg {
				${tw`w-6 h-6 stroke-current`};
			}
		}
	`,
])

export const DropdownBackDrop = tw.div`
  fixed inset-0 z-50 h-full w-full bg-gray-900 bg-opacity-10
`
