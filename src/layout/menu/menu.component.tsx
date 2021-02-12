import React, { FC, Fragment } from 'react'

import { useSideMenuState } from '@/store/app/app.state'
import { Backdrop, IconButton } from '@/components/ui'
import SearchForm from '@/components/shared/search/search-form/search-form.component'
import Links from './links/links.component'
import DarkMode from './dark-mode/dark-mode.component'
import SignOut from './sign-out/sign-out.component'
import { StyledMenu } from './menu.styles'

const Menu: FC = () => {
	const [ isSideMenuOpen, setIsSideMenuOpen ] = useSideMenuState()

	return (
		<Fragment>
			<StyledMenu isOpen={isSideMenuOpen}>
				<div>
					<SearchForm />
					<Links />
				</div>
				<div>
					<div>
						<DarkMode />
						<IconButton>Install The Application</IconButton>
					</div>
					<SignOut />
				</div>
			</StyledMenu>
			{isSideMenuOpen && <Backdrop onClick={() => setIsSideMenuOpen(false)} />}
		</Fragment>
	)
}

export default Menu
