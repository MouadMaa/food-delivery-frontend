import tw, { css, styled } from 'twin.macro'

export const StyledMobileOrdersButton = styled.button(({ show }: { show: boolean }) => [
  tw`fixed -right-2 bottom-2 z-20 items-center w-8/12 space-x-2 px-5 py-3 text-gray-50 bg-primary-default rounded-xl shadow-md focus:outline-none`,
  css`
    svg {
      ${tw`w-6 h-6 stroke-current`}
    }

    span {
      ${tw`tracking-wider`}
    }

    animation: show-order-button 0.6s ease-out;

    @keyframes show-order-button {
      from {
        opacity: 1;
        transform: translateX(100vw);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
  show ? [tw`flex lg:hidden`] : [tw`hidden`],
])
