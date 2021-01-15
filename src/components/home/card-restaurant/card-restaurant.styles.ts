import tw, { css, styled } from 'twin.macro'

export const StyledCardRestaurant = styled.article(() => [ tw`min-w-full h-56 cursor-pointer` ])

export const StyledCardRestaurantPicture = styled.div(() => [
	tw`relative block pb-40 rounded-2xl shadow-lg overflow-hidden`,
	css`
		img {
			${tw`absolute h-full w-full object-cover group-hover:shadow-lg transform group-hover:scale-105 duration-500`};
		}

		div {
			${tw`absolute right-0 flex items-center justify-center w-28 h-6 rounded-bl-2xl`};

			span {
				${tw`text-sm text-gray-50`};
			}
		}
	`,
])

export const StyledCardRestaurantContent = styled.div(() => [
	tw`p-2 space-y-1`,
	css`
		> div:first-child {
			${tw`flex items-center justify-between`};

			h3 {
				${tw`text-lg capitalize text-gray-800 tracking-wider dark:text-white`};
			}

			div {
				${tw`flex items-center justify-center space-x-1`} svg {
					${tw`w-4 h-4 text-primary-default fill-current`};
				}

				span {
					${tw`text-sm text-gray-600 dark:text-gray-300`};
				}
			}
		}
	`,
])
