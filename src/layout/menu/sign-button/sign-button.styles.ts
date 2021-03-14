import tw, { css, styled } from 'twin.macro'

export const StyledSignButton = styled.button(() => [
  tw`flex items-center text-sm sm:text-md tracking-wide px-4 py-2 space-x-4 rounded-2xl select-none transition-colors duration-300 focus:outline-none active:bg-gray-100 dark:text-gray-200 dark:active:bg-gray-800`,
  css`
    svg {
      ${tw`w-5 sm:w-6 h-5 sm:h-6 stroke-current`};
    }
  `,
])
