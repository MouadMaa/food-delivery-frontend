import tw, { css, styled } from 'twin.macro'

export const StyledCategory = styled.button(() => [
	tw`flex items-center justify-center py-2 px-4 space-x-3 bg-primary-default`,
	tw`shadow rounded-xl`,
	tw`transition duration-300`,
	tw`focus:outline-none focus-visible:(ring ring-primary-light)`,
	tw`active:bg-primary-default`,
	css`
		> div {
			${tw`relative w-6 h-6`};
		}
		span {
			${tw`text-sm sm:text-md text-white tracking-wider`};
		}
	`,
])
