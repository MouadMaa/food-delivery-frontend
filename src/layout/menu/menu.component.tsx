import React, { FC, Fragment } from 'react'
import { useRecoilState } from 'recoil'

import { sideMenuState } from '@/store/app/app.state'
import { Backdrop, Button } from '@/components/ui'
import Links from './links/links.component'
import DarkMode from './dark-mode/dark-mode.component'
import SignOut from './sign-out/sign-out.component'
import { StyledMenu } from './menu.styles'

const Menu: FC = () => {
	const [ isSideMenuOpen, setIsSideMenuOpen ] = useRecoilState(sideMenuState)

	return (
		<Fragment>
			<StyledMenu isOpen={isSideMenuOpen}>
				<Links />
				<div>
					<div>
						<DarkMode />
						<Button text='Install The Application' level='SubTitle' />
					</div>
					<SignOut />
				</div>
			</StyledMenu>
			{isSideMenuOpen && <Backdrop onClick={() => setIsSideMenuOpen(false)} />}
		</Fragment>
	)
}

export default Menu
