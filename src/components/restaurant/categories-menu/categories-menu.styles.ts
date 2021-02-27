import tw, { css, styled } from 'twin.macro'

export const StyledCategoriesMenu = styled.section(() => [
  tw`sticky top-0 z-10 overflow-x-auto overflow-y-hidden pt-2 pb-2 sm:pt-4 shadow-sm bg-white dark:bg-gray-900`,
  css`
    nav > {
      ${tw`flex items-center text-sm`};

      a {
        ${tw`px-4 py-2 tracking-wider uppercase leading-none whitespace-nowrap text-gray-500 border-b-2 border-gray-200 cursor-pointer transition-colors duration-300 hover:border-primary-light dark:text-gray-300 dark:border-gray-600 dark:hover:border-primary-default`}
      }
    }
  `,
])

// ${tw`px-4 py-2 tracking-wider leading-none whitespace-nowrap border-b-2 text-primary-default bg-primary-background border-primary-light rounded-t transition-colors duration-300 dark:bg-gray-800 dark:border-primary-default`};
