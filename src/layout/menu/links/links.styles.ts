import tw, { css, styled } from 'twin.macro'

export const StyledMenuLinks = tw.nav`
  flex flex-col justify-between space-y-2 sm:space-y-4
`

export const StyledMenuLink = styled.a(({ isActive }: { isActive: boolean }) => [
  tw`flex items-center h-9 sm:h-10 space-x-4 rounded-lg overflow-hidden cursor-pointer transition-colors duration-300`,
  css`
    div {
      ${tw`w-1 h-0 bg-primary-default transition-all duration-300`};
    }
    svg {
      ${tw`w-5 h-5 stroke-current dark:text-gray-200`};
    }
    span {
      ${tw`text-sm lg:text-md`};
    }
  `,
  isActive
    ? [
        tw`text-primary-default bg-primary-background dark:bg-gray-800`,
        css`
          div {
            ${tw`h-full`};
          }
        `,
      ]
    : [tw`text-gray-700 dark:text-gray-200`],
])
