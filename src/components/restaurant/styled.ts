import tw, { css, styled } from 'twin.macro'

export const StyledRestaurant = styled.section(({ showOrders }: { showOrders: boolean }) => [
  tw`-mx-2 lg:mx-auto grid grid-cols-1 lg:grid-cols-3`,
  css`
    > section:first-of-type {
      ${tw`col-span-2`};
    }

    > aside {
      ${tw`sticky z-20 h-screen p-2 sm:p-4 shadow-lg`}

      top: 71px;
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
