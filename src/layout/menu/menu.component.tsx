import React, { FC, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { menuIsOpenSelector } from '@/store/app/app.selectors'
import { toggleMenu } from '@/store/app/app.actions'
import Backdrop from '@/components/ui/backdrop/backdrop.component'
import Links from './links/links.component'
import SignOut from './sign-out/sign-out.component'
import { StyledMenu } from './menu.styles'

const Menu: FC = () => {
	const menuIsOpen = useSelector(menuIsOpenSelector)
	const dispatch = useDispatch()

	return (
		<Fragment>
			<StyledMenu menuIsOpen={menuIsOpen}>
				<Links />
				<SignOut />
			</StyledMenu>
			<Backdrop show={menuIsOpen} onHide={() => dispatch(toggleMenu())} />
		</Fragment>
	)
}

export default Menu
