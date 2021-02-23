import tw, { css, styled } from 'twin.macro'

export const StyledRestaurantDetails = styled.section(() => [
  tw`relative h-52`,
  css`
    > div:nth-of-type(2) {
      ${tw`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent`};
    }

    > div:last-of-type {
      ${tw`absolute inset-y-2 sm:inset-y-4 inset-x-3 sm:inset-x-6 flex justify-between items-end`};

      > div {
        ${tw`flex-grow`};

        h1 {
          ${tw`font-semibold text-xl tracking-widest text-white`};
        }

        div {
          ${tw`flex items-center flex-wrap text-sm text-gray-200`};

          span {
            ${tw`flex items-center justify-center w-4 h-4`}
          }
        }
      }

      button {
        ${tw`transform scale-150 transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-primary-light active:scale-125`};

        svg {
          ${tw`w-6 h-6 text-primary-default fill-current`};
        }
      }
    }
  `,
])
