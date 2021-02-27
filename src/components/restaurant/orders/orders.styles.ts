import tw, { css, styled } from 'twin.macro'

export const StyledOrders = styled.section(() => [
  css`
    > div:first-child {
      ${tw`my-4 py-4 space-y-6 border-t-2 border-b-2 border-gray-200 border-dashed overflow-y-auto dark:border-gray-600`}
    }

    > div:last-child {
      ${tw`text-sm flex justify-between`};

      span:first-child {
        ${tw`text-gray-500 dark:text-gray-400`}
      }

      span:last-child {
        ${tw`text-primary-default`}
      }
    }
  `,
])
