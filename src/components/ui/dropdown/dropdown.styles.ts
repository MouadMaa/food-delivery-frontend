import tw, { css, styled } from 'twin.macro'

export const StyledDropdown = styled.div(() => [
	tw`
    absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-800
  `,
	css`
		button {
			${tw`flex w-full px-4 py-2 space-x-2 text-sm text-gray-500 hover:(bg-gray-100 text-gray-700) focus:outline-none dark:text-gray-100 dark:hover:bg-gray-700`};
		}
	`,
])

export const BackDrop = tw.div`
  fixed inset-0 h-full w-full
`
