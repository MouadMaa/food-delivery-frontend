import tw, { css, styled } from 'twin.macro'

export const StyledDeliveryAddress = styled.section(() => [
  tw`flex items-center justify-between text-sm text-gray-600`,
  css`
    > div {
      ${tw`flex items-center space-x-3`};

      button {
        ${tw`w-16 h-12 rounded-2xl transform scale-100 transition duration-300 active:scale-90`}

        svg {
          ${tw`w-6 h-6 text-primary-dark stroke-current`}
        }
      }

      > div span {
        ${tw`flex flex-col p-px text-gray-600 dark:text-gray-300`}
      }
    }

    span {
      ${tw`text-primary-default`}
    }
  `,
])
