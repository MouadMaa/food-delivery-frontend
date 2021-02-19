import tw, { css, styled } from 'twin.macro'

export const StyledSearchForm = styled.div(() => [
	tw`
    hidden xl:(flex items-center)
  `,
	css`
		> div {
			${tw`relative`};

			> button {
				${tw`transform -translate-x-4 py-3.5`};

				svg {
					${tw`text-gray-600 stroke-current dark:text-gray-100`};
				}
			}
		}
	`,
])

export const FormContainer = styled.form(() => [
	tw`
    flex
  `,
	css`
		> div {
			${tw`flex items-center h-9 px-4 py-2 bg-gray-100 border-l-2 rounded-2xl dark:(bg-gray-800 border-gray-600)`};

			input {
				${tw`h-full tracking-wide bg-transparent placeholder-gray-400 focus:outline-none`};
			}
		}

		> div:first-child {
			${tw`w-40 space-x-2 border-l-2 cursor-pointer`};

			svg {
				${tw`w-5 h-5 text-primary-default stroke-current stroke-2 cursor-pointer`};
			}

			input {
				${tw`w-20 text-primary-default cursor-pointer`};
			}
		}

		> div:last-child {
			${tw`relative w-80 space-x-2 text-gray-400 border-l-4 border-r-2 transform -translate-x-6 transition duration-300 focus-within:(border-transparent ring-2 ring-gray-300) dark:(focus-within:ring-gray-700)`};

			svg {
				${tw`w-5 h-5 text-current stroke-current`};
			}

			input {
				${tw`w-full text-gray-600 dark:text-gray-200`};
			}
		}
	`,
])
