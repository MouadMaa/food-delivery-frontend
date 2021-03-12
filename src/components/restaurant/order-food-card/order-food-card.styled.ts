import tw, { css, styled } from 'twin.macro'

export const StyledOrderFoodCard = styled.article(() => [
  tw`flex items-center w-full h-14 space-x-4`,
  css`
    figure {
      ${tw`relative h-full w-20 overflow-hidden cursor-pointer`}

      img {
        ${tw`absolute rounded-lg`}
      }
    }

    > div {
      ${tw`text-xs sm:text-sm flex items-center justify-between w-full`};

      div:first-child {
        ${tw`cursor-pointer`}

        h4 {
          ${tw`tracking-wide text-gray-600 mb-0.5 dark:text-gray-300`}
        }

        span {
          ${tw`text-xs text-primary-default`}
        }
      }

      div:last-child {
        ${tw`flex items-center space-x-3`}

        button {
          ${tw`flex items-center justify-center w-5 h-5 font-semibold text-gray-400 bg-gray-200 rounded-full transform scale-100 transition duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 active:bg-gray-300 active:scale-90 dark:bg-gray-600 dark:focus-visible:border-gray-500 dark:active:bg-gray-500`};
        }

        span {
          ${tw`text-sm text-gray-600 dark:text-gray-200`}
        }
      }
    }
  `,
])
