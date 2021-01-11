import tw, { css, styled } from 'twin.macro'

export const StyledDesktopSignInOut = styled.div(() => [
	tw`
    hidden md:flex space-x-3
  `,
	css`
		button {
			${tw`font-normal px-5 py-1.5`};
		}
	`,
])
