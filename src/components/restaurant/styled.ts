import { CSSProperties } from 'react'
import tw, { css, styled } from 'twin.macro'

export const StyledRestaurant = styled.section(({ showOrders }: { showOrders: boolean }) => [
  tw`-mx-2 lg:mx-0 grid grid-cols-1 lg:grid-cols-3 h-full`,
  css`
    > section:first-of-type {
      ${tw`col-span-2`};
    }

    > aside {
      ${tw`sticky top-0 z-20 justify-between flex-col h-full p-2 sm:p-4 shadow-lg rounded-3xl`}

      max-height: 90vh;
    }
  `,
  showOrders
    ? [
        css`
          > section:first-of-type {
            ${tw`hidden lg:block`}
          }

          > aside {
            ${tw`flex`}
          }
        `,
      ]
    : [
        css`
          > section:first-of-type {
            ${tw`block`}
          }

          > aside {
            ${tw`hidden lg:flex`}
          }
        `,
      ],
])

export const asideStyle = (): CSSProperties =>
  typeof window !== 'undefined'
    ? {
        maxHeight: `calc(100vh - ${document.querySelector('header')?.offsetHeight}px)`,
      }
    : {}
