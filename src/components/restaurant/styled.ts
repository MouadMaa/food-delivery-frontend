import tw, { css, styled } from 'twin.macro'

export const StyledRestaurant = styled.section(({ showOrders }: { showOrders: boolean }) => [
  tw`-mx-2 lg:mx-0 grid grid-cols-1 lg:grid-cols-3 `,
  css`
    > section:first-of-type {
      ${tw`col-span-2`};
    }

    > aside {
      ${tw`sticky top-0 z-20 h-screen p-2 sm:p-4 shadow-lg`}
    }
  `,
  showOrders
    ? [
        css`
          > section:first-of-type {
            ${tw`hidden lg:block`}
          }

          > aside {
            ${tw`block`}
          }
        `,
      ]
    : [
        css`
          > section:first-of-type {
            ${tw`block`}
          }

          > aside {
            ${tw`hidden lg:block`}
          }
        `,
      ],
])
