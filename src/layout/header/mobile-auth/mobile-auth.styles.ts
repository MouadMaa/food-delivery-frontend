import tw, { css, styled } from 'twin.macro'

export const StyledMobileSign = styled.div(() => [
  tw`
    relative md:hidden
  `,
  css`
    > div {
      ${tw`z-20`};
    }

    svg {
      ${tw`w-5 h-5 text-gray-500 stroke-2 stroke-current dark:text-gray-300`};
    }
  `,
])
