import tw, { css, styled } from 'twin.macro'

export const StyledMenu = styled.menu(({ isOpenMenu }: { isOpenMenu: boolean }) => [
	tw`font-body text-gray-700 absolute flex flex-col justify-between w-full h-full z-50 max-w-sm m-0 px-4 pt-8 pb-20 md:pb-24 xl:pb-28 bg-white shadow-lg border-r-2 border-gray-200 transition-all duration-500 transform dark:bg-gray-900 dark:border-gray-600`,
	isOpenMenu ? [ tw`translate-x-0` ] : [ tw`-translate-x-full` ],
	css`
		ul {
			${tw`flex flex-col justify-between space-y-4`};
		}
		button {
			${tw`flex items-center text-md tracking-wide px-4 py-2 space-x-4 rounded-2xl transition-colors duration-300 focus:outline-none active:bg-gray-100 dark:text-gray-100 dark:active:bg-gray-800`};
		}
	`,
])

export const MenuItem = styled.li(({ isActive }: { isActive: boolean }) => [
	tw`flex items-center h-10 space-x-4`,
	css`
		svg {
			${tw`w-5 h-5 stroke-current`};
		}
		span {
			${tw`text-md font-medium`};
		}
	`,
	isActive
		? [
				tw`text-primary-default bg-primary-background rounded-lg overflow-hidden cursor-pointer dark:bg-gray-800`,
				css`
					div {
						${tw`w-1 h-full bg-primary-default`};
					}
				`,
			]
		: [
				tw`text-gray-700 rounded-lg overflow-hidden cursor-pointer select-none transition-colors duration-300 active:text-primary-default active:bg-primary-background dark:text-gray-100 dark:active:bg-gray-800`,
				css`
					div {
						${tw`w-1 h-0 bg-primary-default transition-all duration-500 group-hover:h-full`};
					}
				`,
			],
])

export const BackDrop = tw.div`
	fixed inset-0 z-40
`
