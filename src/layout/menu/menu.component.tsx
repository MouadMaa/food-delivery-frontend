import React, { FC, Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'next-themes'

import { menuSelector } from '@/store/app/app.selectors'
import { toggleMenu } from '@/store/app/app.actions'
import { Backdrop, Button, Switch } from '@/components/ui'
import Links from './links/links.component'
import SignOut from './sign-out/sign-out.component'
import { StyledMenu } from './menu.styles'

const Menu: FC = () => {
	const dispatch = useDispatch()
	const menu = useSelector(menuSelector)

	const { theme, setTheme } = useTheme()
	const [ isMounted, setIsMounted ] = useState(false)
	const [ darkMode, setDarkMode ] = useState(false)

	useEffect(() => {
		setIsMounted(true)
		setDarkMode(theme === 'dark')
	}, [])

	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === 'light' ? 'dark' : 'light')
			setDarkMode(!darkMode)
		}
	}

	return (
		<Fragment>
			<StyledMenu show={menu}>
				<Links />
				<div>
					<div>
						<Switch
							name='dark-mode'
							label={`Switch To ${darkMode ? 'Dark' : 'Light'} Mode`}
							value={darkMode}
							onChange={switchTheme}
						/>
						<Button text='Install The Application' level='SubTitle' />
					</div>
					<SignOut />
				</div>
			</StyledMenu>
			<Backdrop show={menu} onHide={() => dispatch(toggleMenu())} />
		</Fragment>
	)
}

export default Menu
