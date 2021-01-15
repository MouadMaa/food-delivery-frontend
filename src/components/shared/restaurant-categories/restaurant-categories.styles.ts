import tw, { css, styled } from 'twin.macro'

export const StyledRestaurantCategories = styled.div(() => [
	tw`flex items-center text-sm text-gray-600 dark:text-gray-300`,
	css`
		svg {
			${tw`w-3 h-4 fill-current`};
		}
	`,
])
