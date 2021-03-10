import tw, { css, styled } from 'twin.macro'

export const StyledModal = styled.section(({ isOpen }: { isOpen: boolean }) => [
  tw`fixed inset-0 flex items-center justify-center`,
  css`
    section {
      ${tw`bg-white z-50 rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 dark:bg-gray-900`};
    }
  `,
  isOpen
    ? [
        css`
          z-index: 60;

          section {
            ${tw`opacity-100 translate-y-0 pointer-events-auto`};
          }
        `,
      ]
    : [
        css`
          z-index: -10;

          section {
            ${tw`opacity-0 -translate-y-full pointer-events-none`};
          }
        `,
      ],
])
