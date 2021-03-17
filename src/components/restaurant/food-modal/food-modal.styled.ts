import tw, { css, styled } from 'twin.macro'

import { Food } from '@/store/food/food.types'

export const StyledFoodModal = styled.div(({ food }: { food: Food }) => [
  tw`max-w-2xl max-h-screen w-full`,
  css`
    figure {
      ${tw`relative h-32 lg:h-48`};

      button {
        ${tw`absolute top-2 right-2 flex items-center justify-center w-9 lg:w-10 h-9 lg:h-10 bg-gray-50 opacity-90 rounded-2xl transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-primary-light active:bg-gray-100`};

        svg {
          ${tw`w-3.5 h-3.5 text-gray-500 fill-current`}
        }
      }
    }

    form {
      ${tw`relative bg-white h-full -mt-6 p-4 lg:p-6 rounded-3xl dark:bg-gray-900`};

      > div:first-of-type {
        ${tw`flex items-center justify-between`};

        > div:first-of-type {
          p {
            ${tw`text-xs lg:text-sm text-gray-600 dark:text-gray-300`};
          }

          h3 {
            ${tw`text-md md:text-lg font-semibold tracking-wider text-gray-600 dark:text-gray-300`}
          }
        }

        > div:last-of-type {
          ${tw`flex flex-col sm:flex-row items-center justify-center lg:space-y-1 sm:space-x-3 text-md md:text-lg`};

          button {
            ${tw`flex items-center justify-center w-5 lg:w-6 h-5 lg:h-6 text-gray-400 bg-gray-200 rounded-full transform scale-100 transition duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 active:bg-gray-300 active:scale-90 dark:bg-gray-600 dark:focus-visible:border-gray-500 dark:active:bg-gray-500`}
          }

          span {
            ${tw`text-sm md:text-md text-gray-500 dark:text-gray-400`}
          }
        }
      }

      > p {
        ${tw`text-xs sm:text-sm mt-1 mb-2 text-gray-600 dark:text-gray-300`}
      }

      > div:last-of-type {
        ${tw`flex flex-col sm:flex-row items-center justify-between text-xs lg:text-sm mt-4 space-x-0 lg:space-x-6 space-y-2 sm:space-y-0`};

        > div {
          ${tw`flex flex-row sm:flex-col justify-between whitespace-nowrap w-full sm:w-auto`};

          span:first-of-type {
            ${tw`text-gray-600 dark:text-gray-300`}
          }

          span:last-child {
            ${tw`text-primary-default`}
          }
        }

        button {
          ${tw`flex items-center justify-center w-full space-x-2 px-6 py-2 tracking-wider text-white bg-primary-default shadow rounded-l-full transition duration-300 border-0 focus:outline-none focus-visible:ring focus-visible:ring-primary-light active:bg-primary-dark`};
        }
      }
    }
  `,
  !food.image && [
    css`
      figure {
        ${tw`h-20`}
      }
    `,
  ],
  food.choices.length && [
    css`
      form > div:nth-of-type(2) {
        ${tw`my-2 lg:my-4 py-2 lg:py-4 px-2 space-y-6 border-t-2 border-b-2 border-gray-200 border-dashed overflow-y-auto dark:border-gray-600`};
        max-height: 40vh;
      }
    `,
  ],
])
