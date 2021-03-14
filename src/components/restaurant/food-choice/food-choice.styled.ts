import tw, { css, styled } from 'twin.macro'

export const StyledFoodChoice = styled.div(() => [
  tw`space-y-1 lg:space-y-2`,
  css`
    h5 {
      ${tw`text-xs sm:text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-200`}
    }

    > div {
      ${tw`text-xs sm:text-sm space-y-1 lg:space-y-2`};

      > div {
        ${tw`flex items-center justify-between`};

        > div {
          ${tw`flex items-center justify-between space-x-3`};

          label {
            ${tw`text-gray-700 cursor-pointer select-none dark:text-gray-100`};
          }
        }

        span {
          ${tw`text-primary-default`}
        }
      }
    }
  `,
])
