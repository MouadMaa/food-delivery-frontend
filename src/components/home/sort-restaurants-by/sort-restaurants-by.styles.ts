import tw, { css, styled } from 'twin.macro'

export const StyledSortBy = styled.div(() => [
  tw`relative transition-all duration-300`,
  css`
    > div:first-child {
      ${tw`flex space-x-1`};

      > span {
        ${tw`text-sm text-gray-500 dark:text-gray-300`};
      }

      button {
        ${tw`flex items-center justify-center space-x-0.5 text-sm text-gray-700 dark:text-gray-100 focus:outline-none`};

        svg {
          ${tw`w-3 h-2 stroke-current`};
        }
      }
    }
  `,
])
