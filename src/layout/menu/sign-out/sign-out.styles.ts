import tw, { css, styled } from 'twin.macro'

export const StyledSignOut = styled.button(() => [
	tw`flex items-center text-md tracking-wide px-4 py-2 space-x-4 rounded-2xl transition-colors duration-300 focus:outline-none active:bg-gray-100 dark:text-gray-100 dark:active:bg-gray-800`,
	css`
		svg {
			${tw`w-6 h-6 stroke-current`};
		}
	`,
])
