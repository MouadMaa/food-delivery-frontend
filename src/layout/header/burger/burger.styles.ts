import tw, { css, styled } from 'twin.macro'

export const StyledBurger = styled.div(() => [
	tw`
    flex flex-col justify-between w-full h-full p-2
  `,
	css`
		div {
			${tw`h-0.5 bg-gray-500 dark:bg-gray-300`};
		}
		div:first-child {
			${tw`self-end h-0.5 w-2/3 bg-gray-500 transition-all duration-300 group-hover:w-full dark:bg-gray-300`};
		}
		div:last-child {
			${tw`h-0.5 w-2/3 bg-gray-500 transition-all duration-300 group-hover:w-full dark:bg-gray-300`};
		}
	`,
])
