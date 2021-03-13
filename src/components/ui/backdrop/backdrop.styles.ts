import tw, { css, styled } from 'twin.macro'

export const StyledBackdrop = styled.div(({ show }: { show: boolean }) => [
  tw`fixed inset-0 z-40 transition duration-300`,
  css`
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    }
  `,
  show
    ? [
        tw`opacity-100`,
        css`
          transform: translateY(0);
        `,
      ]
    : [
        tw`opacity-0`,
        css`
          transform: translateY(-200vh);
        `,
      ],
])
