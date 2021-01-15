import tw, { css, styled } from 'twin.macro'

export const StyledRestaurants = styled.section(() => [
	tw`my-6 sm:my-8`,
	css`
		> article {
			${tw`flex items-center justify-between flex-wrap`};

			h2 {
				${tw`text-md sm:text-lg font-semibold tracking-wide text-gray-600 dark:text-gray-200`};
			}
		}

		> div {
			${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 my-6`};
		}
	`,
])
