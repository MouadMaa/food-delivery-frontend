import tw, { css, styled } from 'twin.macro'

export const StyledSwitch = styled.label(({ isChecked }: { isChecked: boolean }) => [
	tw`flex items-center space-x-3 cursor-pointer select-none`,
	css`
		> div {
			${tw`relative block w-8 h-5 bg-gray-200 rounded-3xl cursor-pointer transition-all duration-300`};

			div {
				${tw`absolute top-0.5 left-0.5 bottom-0.5 w-1/2 bg-white rounded-full transform transition-all duration-300`};
			}

			input {
				${tw`w-0 h-0 invisible`};
			}
		}
		> span {
			${tw`text-sm cursor-pointer`};
		}
	`,
	isChecked && [
		css`
			> div {
				${tw`bg-primary-default`};

				div {
					${tw`translate-x-full -left-0.5`};
				}
			}
		`,
	],
])
