import tw, { styled } from 'twin.macro'

export const StyledMenu = styled.menu(({ menuIsOpen }: { menuIsOpen: boolean }) => [
	tw`font-body text-gray-700 absolute flex flex-col justify-between w-full h-full z-50 max-w-sm m-0 px-4 pt-8 pb-20 md:pb-24 xl:pb-28 bg-white shadow-lg border-r-2 border-gray-200 transition-all duration-500 transform dark:bg-gray-900 dark:border-gray-600`,
	menuIsOpen ? [ tw`translate-x-0` ] : [ tw`-translate-x-full` ],
])
