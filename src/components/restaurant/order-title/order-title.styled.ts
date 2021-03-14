import tw, { css, styled } from 'twin.macro'

export const StyledOrderTitle = styled.div(() => [
  tw`flex items-center justify-between mb-6`,
  css`
    span {
      ${tw`text-md md:text-lg tracking-wide pl-2 text-gray-600 dark:text-gray-300`}
    }

    button {
      ${tw`flex lg:hidden`}

      svg {
        ${tw`w-5 h-5 text-gray-400 fill-current`}
      }
    }
  `,
])
