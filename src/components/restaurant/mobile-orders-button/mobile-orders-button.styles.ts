import tw, { css, styled } from 'twin.macro'

export const StyledMobileOrdersButton = styled.button(() => [
  tw`fixed -right-2 bottom-2 z-20 flex lg:hidden items-center w-8/12 space-x-2 px-5 py-3 text-gray-50 bg-primary-default rounded-xl shadow-md focus:outline-none`,
  css`
    svg {
      ${tw`w-6 h-6 stroke-current`}
    }

    span {
      ${tw`tracking-wider`}
    }
  `,
])
