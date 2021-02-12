import tw, { css, styled } from 'twin.macro'

export const StyledMenuLinks = tw.nav`
  flex flex-col justify-between space-y-4
`

export const StyledMenuLink = styled.a(({ isActive }: { isActive: boolean }) => [
	tw`flex items-center h-10 space-x-4 rounded-lg overflow-hidden cursor-pointer transition-colors duration-300`,
	css`
		div {
			${tw`w-1 h-0 bg-primary-default transition-all duration-300`};
		}
		svg {
			${tw`w-5 h-5 text-gray-600 stroke-current dark:text-gray-100`};
		}
		span {
			${tw`text-md`};
		}
	`,
	isActive
		? [
				tw`text-primary-default bg-primary-background dark:text-primary-default dark:bg-gray-800`,
				css`
					div {
						${tw`h-full`};
					}
				`,
			]
		: [ tw`text-gray-700 dark:text-gray-100` ],
])
