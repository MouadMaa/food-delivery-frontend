import tw, { css, styled } from 'twin.macro'

export const StyledDropdown = styled.div(({ show }: { show: boolean }) => [
  tw`
    absolute right-0 z-50 mt-2 w-60 bg-white rounded-xl shadow-md overflow-hidden transform origin-top-right transition duration-500 dark:bg-gray-800
  `,
  show ? [tw`block z-50`] : [tw`hidden`],
  css`
    animation: show-dropdown 0.2s ease-out;

    @keyframes show-dropdown {
      from {
        opacity: 0;
        transform: translateY(-20px) scale(0.7);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    button {
      ${tw`flex items-center justify-between w-full px-4 py-2 space-x-2 text-sm text-gray-600 tracking-wide transition-colors duration-300 hover:(bg-gray-200 text-gray-700) focus:outline-none dark:(text-gray-100 hover:bg-gray-700)`};

      svg {
        ${tw`w-6 h-6 stroke-current`};
      }
    }
  `,
])
