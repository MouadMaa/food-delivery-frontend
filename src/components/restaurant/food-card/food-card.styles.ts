import tw, { css, styled } from 'twin.macro'

export const StyledFoodCard = styled.article(() => [
  tw`grid grid-cols-5 items-center h-32 border-2 border-gray-200 shadow-sm rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow dark:border-gray-600`,
  css`
    figure {
      ${tw`col-span-2 sm:col-span-1 relative h-full rounded-lg overflow-hidden`};

      img {
        ${tw`absolute duration-500 transform`}
      }
    }

    > div {
      ${tw`col-span-3 sm:col-span-4 m-4 sm:my-2 text-sm`};

      > div {
        ${tw`flex items-start justify-between flex-col sm:flex-row my-1 sm:mb-2 space-y-2 sm:space-y-0`}

        h4 {
          ${tw`text-gray-700 sm:text-md tracking-wide capitalize dark:text-gray-200`};
        }

        span {
          ${tw`text-primary-default`}
        }
      }

      p {
        ${tw`hidden sm:inline-block text-gray-500 dark:text-gray-400`}
      }
    }
  `,
])
