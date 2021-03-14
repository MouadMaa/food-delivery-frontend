import tw, { css, styled } from 'twin.macro'

export const StyledMenu = styled.menu(({ show }: { show: boolean }) => [
  tw`font-body text-gray-700 fixed flex flex-col justify-between w-full h-screen max-w-sm m-0 px-4 pt-4 lg:pt-8 pb-20 md:pb-24 xl:pb-28 bg-white shadow-lg border-r-2 border-gray-200 transition-all duration-500 transform dark:bg-gray-900 dark:border-gray-600`,
  show ? [tw`translate-x-0`] : [tw`-translate-x-full`],
  css`
    top: 71px;
    z-index: 45;

    @media (max-width: 1024px) {
      top: 58px;
    }

    > div:first-child {
      ${tw`space-y-4 xl:space-y-0`};

      > div {
        ${tw`relative block xl:hidden`};

        > div {
          ${tw`absolute bottom-0.5 right-0`};

          button {
            ${tw`transform translate-x-0`};
          }
        }

        form {
          ${tw`flex-col space-y-2 flex-1`};

          > div:first-child {
            ${tw`w-full border-r-2`};
          }

          > div:last-child {
            ${tw`w-full transform translate-x-0`};
          }
        }
      }
    }

    > div:last-child {
      ${tw`flex justify-between flex-col h-full`};

      max-height: 20vh;

      > div {
        ${tw`mx-4 my-1 sm:my-2 space-y-6`};

        > button {
          ${tw`text-sm sm:text-md w-full py-5 text-primary-default rounded-2xl dark:text-primary-default`};
        }
      }
    }
  `,
])
