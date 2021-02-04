import tw, { css, styled } from 'twin.macro'

export const StyledLoader = styled.div(() => [
	tw`flex items-center justify-center w-full h-16 space-x-2`,
	css`
		> div {
			${tw`w-4 h-4 bg-primary-default -mb-1 rounded-lg animate-bounce`};
			animation: bouncing-loader 0.6s infinite alternate;
		}
		> div:nth-child(1) {
			animation-delay: 0.4s;
		}
		> div:nth-child(2) {
			animation-delay: 0.2s;
		}

		@keyframes bouncing-loader {
			to {
				opacity: 0.1;
				transform: translate3d(0, -16px, 0);
			}
		}
	`,
])
