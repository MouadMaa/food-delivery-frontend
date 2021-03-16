import tw, { css, styled } from 'twin.macro'

export const StyledDarkMode = styled.div(() => [
  tw`ml-2`,
  css`
    svg {
      ${tw`w-4 h-4 text-gray-400 stroke-current dark:text-gray-300`};
    }
  `,
])
