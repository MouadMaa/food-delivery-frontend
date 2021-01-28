import tw, { css, styled } from 'twin.macro'

export const StyledCategoryButton = styled.button(({ isSelected }: { isSelected: boolean }) => [
	tw`flex items-center justify-around py-2 px-4`,
	tw`bg-white border-2 border-gray-200 shadow-sm rounded-xl select-none`,
	tw`transition duration-300`,
	tw`focus:outline-none focus-visible:(border-gray-300 ring-1 ring-gray-300)`,
	css`
		picture {
			${tw`relative w-6 h-6`};
		}
		span {
			${tw`text-sm sm:text-md tracking-wider`};
		}
	`,

	!isSelected && [ tw`dark:(text-gray-50 bg-gray-900 border-gray-600)` ],

	isSelected && [
		tw`bg-primary-default shadow`,
		tw`focus:outline-none border-none focus-visible:(ring ring-primary-light)`,
		tw`active:bg-primary-default`,
		css`
			span {
				${tw`text-white`};
			}
		`,
	],
])
