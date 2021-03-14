import tw, { css, styled } from 'twin.macro'

export const StyledSwitch = styled.div(({ isChecked }: { isChecked: boolean }) => [
  tw`flex items-center space-x-3 cursor-pointer select-none`,
  css`
    > button {
      ${tw`relative block w-8 h-5 bg-gray-200 rounded-3xl cursor-pointer transition-all duration-300 shadow border-0 select-none focus:outline-none focus-visible:(ring ring-primary-light)`};

      div {
        ${tw`absolute top-0.5 left-0.5 bottom-0.5 w-1/2 bg-white rounded-full transform transition-all duration-300 dark:bg-gray-200`};
      }
    }
    > span {
      ${tw`text-sm tracking-wide cursor-pointer dark:text-gray-100`};
    }
  `,
  isChecked && [
    css`
      > button {
        ${tw`bg-primary-default`};

        div {
          ${tw`translate-x-full -left-0.5`};
        }
      }
    `,
  ],
])
