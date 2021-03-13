import tw, { css, styled } from 'twin.macro'

export const StyledModal = styled.section(({ show }: { show: boolean }) => [
  tw`fixed inset-0 flex items-center justify-center transition-all duration-300`,
  css`
    section {
      ${tw`bg-white z-50 rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 dark:bg-gray-900`};
    }
  `,
  show
    ? [
        css`
          z-index: 60;

          section {
            ${tw`opacity-100 translate-y-0 scale-100 pointer-events-auto`};
          }
        `,
      ]
    : [
        css`
          z-index: -10;

          section {
            ${tw`opacity-0 -translate-y-full scale-75 pointer-events-none`};
          }
        `,
      ],
])
