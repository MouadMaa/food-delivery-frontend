import { CSSProperties } from 'react'
import tw, { css, styled } from 'twin.macro'

export const StyledOrders = styled.section(() => [
  tw`h-full`,
  css`
    > div:first-child {
      ${tw`h-full my-4 py-4 space-y-6 border-t-2 border-b-2 border-gray-200 border-dashed overflow-y-auto dark:border-gray-600`}

      max-height: 50vh;
      min-height: 40vh;
    }

    > div:last-child {
      ${tw`text-xs sm:text-sm flex justify-between`};

      span:first-child {
        ${tw`text-gray-500 dark:text-gray-400`}
      }

      span:last-child {
        ${tw`text-primary-default`}
      }
    }
  `,
])

export const ordersStyle = (): CSSProperties =>
  typeof window !== 'undefined'
    ? { maxHeight: `calc(${document.querySelector('aside')?.offsetHeight}px - 260px)` }
    : {}
