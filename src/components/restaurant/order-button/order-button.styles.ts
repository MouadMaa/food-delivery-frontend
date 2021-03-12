import tw, { css, styled } from 'twin.macro'

export const StyledOrderButton = styled.section(() => [
  tw`text-sm flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-6 space-y-4 md:space-y-0 mb-4 transform translate-x-0 md:translate-x-4`,
  css`
    div {
      ${tw`flex flex-row-reverse sm:flex-col justify-between text-xs sm:text-sm whitespace-nowrap w-full sm:w-auto ml-0 md:-ml-4`};

      span:first-child {
        ${tw`text-primary-default font-semibold tracking-wider`}
      }

      span:last-child {
        ${tw`text-gray-500 dark:text-gray-400`}
      }
    }

    button {
      ${tw`flex items-center justify-center w-full space-x-2 px-6 py-2 tracking-wider text-white bg-primary-default shadow rounded-l-full transition duration-300 border-0 focus:outline-none focus-visible:ring focus-visible:ring-primary-light active:bg-primary-dark`};

      svg {
        ${tw`w-6 h-6 fill-current transition-transform duration-300 transform`};
      }
    }
  `,
])
