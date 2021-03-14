import React, { FC, Fragment } from 'react'

import { useSideMenuState } from '@/store/global/global.state'
import { Backdrop } from '@/components/ui'
import SearchForm from '@/components/shared/search/search-form/search-form.component'
import Links from './links/links.component'
import InstallApp from './install-app/install-app.component'
import SignButton from './sign-button/sign-button.component'
import { StyledMenu } from './menu.styles'

const Menu: FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useSideMenuState()

  return (
    <Fragment>
      <StyledMenu show={isSideMenuOpen}>
        <div>
          <SearchForm />
          <Links />
        </div>
        <div>
          <div>
            <InstallApp />
          </div>
          <SignButton />
        </div>
      </StyledMenu>
      <Backdrop show={isSideMenuOpen} onClick={() => setIsSideMenuOpen(false)} />
    </Fragment>
  )
}

export default Menu
