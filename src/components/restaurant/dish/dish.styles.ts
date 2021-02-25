import tw, { css, styled } from 'twin.macro'

export const StyledDish = styled.section(() => [
  tw`flex flex-col py-6 mr-0 lg:mr-8`,
  css`
    h3 {
      ${tw`text-md tracking-wider uppercase text-gray-600 mb-4 dark:text-gray-100`}
    }

    > div {
      ${tw`space-y-8`};
    }
  `,
])
