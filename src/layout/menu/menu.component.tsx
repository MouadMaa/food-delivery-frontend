import React, { FC, Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'next-themes'

import { isSideMenuOpenSelector } from '@/store/app/app.selectors'
import { toggleSideMenu } from '@/store/app/app.actions'
import { Backdrop, Button, Switch } from '@/components/ui'
import Links from './links/links.component'
import SignOut from './sign-out/sign-out.component'
import { StyledMenu } from './menu.styles'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'

const Menu: FC = () => {
	const dispatch = useDispatch()
	const isSideMenuOpen = useSelector(isSideMenuOpenSelector)

	const ref = useRef()
	useOnClickOutside(ref, () => isSideMenuOpen && dispatch(toggleSideMenu()))

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
			<StyledMenu isOpen={isSideMenuOpen} ref={ref}>
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
			{isSideMenuOpen && <Backdrop />}
		</Fragment>
	)
}

export default Menu
