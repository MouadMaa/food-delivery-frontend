import tw, { css, styled } from 'twin.macro'

export const StyledOrdersFood = styled.section(() => [
  tw`my-6`,
  css`
    > div:first-child {
      ${tw`h-full py-4 pr-2 space-y-6 border-t-2 border-b-2 border-gray-200 border-dashed overflow-y-auto dark:border-gray-600`}

      max-height: calc(100vh - 400px);

      p {
        ${tw`flex justify-center text-gray-400 dark:text-gray-500`}
      }
    }

    > div:last-child {
      ${tw`text-xs sm:text-sm flex justify-between mt-4`};

      span {
        ${tw`text-gray-500 dark:text-gray-400`}
      }
    }
  `,
])
