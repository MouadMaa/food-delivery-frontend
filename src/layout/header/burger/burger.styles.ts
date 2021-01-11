import tw, { css, styled } from 'twin.macro'

export const StyledBurger = styled.div(() => [
	tw`
    flex flex-col justify-between w-full h-full p-2
  `,
	css`
		div {
			${tw`h-0.5 bg-gray-500 transition-all duration-300 dark:bg-gray-300`};
		}
		div:first-child {
			${tw`self-end w-2/3 group-hover:w-full`};
		}
		div:last-child {
			${tw`w-2/3 group-hover:w-full`};
		}
	`,
])
