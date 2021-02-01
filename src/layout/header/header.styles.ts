import tw, { css, styled } from 'twin.macro'

export const StyledHeader = styled.header(() => [
	tw`font-body text-md text-gray-700 bg-white relative z-50`,
	tw`flex items-center justify-between px-2 md:px-6 py-3 md:py-4 border-b-2 border-gray-200`,
	tw`dark:(text-gray-50 bg-gray-900 border-gray-600)`,
	css`
		> div:first-child {
			${tw`flex items-center justify-between w-full`};
			${tw`md:(w-auto space-x-3)`};
		}
	`,
])
