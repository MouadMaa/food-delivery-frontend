import React, { FC, Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { menuIsOpenSelector } from '@/store/app/app.selectors'
import { toggleMenu } from '@/store/app/app.actions'
import { Backdrop, Button, Switch } from '@/components/ui'
import Links from './links/links.component'
import SignOut from './sign-out/sign-out.component'
import { StyledMenu } from './menu.styles'

const Menu: FC = () => {
	const menuIsOpen = useSelector(menuIsOpenSelector)
	const dispatch = useDispatch()

	const [ checked, setChecked ] = useState(false)

	useEffect(
		() => {
			console.log(checked)
		},
		[ checked ],
	)

	return (
		<Fragment>
			<StyledMenu menuIsOpen={menuIsOpen}>
				<Links />
				<div>
					<div>
						<Switch
							name='dark-mode'
							label='Switch To Dark Mode'
							value={checked}
							onChange={() => setChecked(!checked)}
						/>
						<Button text='Install The Application' level='SubTitle' />
					</div>
					<SignOut />
				</div>
			</StyledMenu>
			<Backdrop show={menuIsOpen} onHide={() => dispatch(toggleMenu())} />
		</Fragment>
	)
}

export default Menu
