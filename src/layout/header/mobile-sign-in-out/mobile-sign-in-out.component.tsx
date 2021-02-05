import { FC, useState } from 'react'

import { IconButton, Dropdown } from '@/components/ui'
import { StyledMobileSign } from './mobile-sign-in-out.styles'
import { UserSvg } from './mobile-sign-in-out.svg'

const MobileSignInOut: FC = () => {
	const [ show, setShowDropdown ] = useState(false)
	const [ selected, setSelected ] = useState('')

	const itemsDropdown = [ 'Sign In', 'Create Account' ]

	return (
		<StyledMobileSign onClick={() => setShowDropdown(!show)}>
			<IconButton onClick={() => {}}>
				<UserSvg />
			</IconButton>

			<Dropdown isOpen={show} onHide={() => setShowDropdown(false)} items={itemsDropdown} onSelect={setSelected} />
		</StyledMobileSign>
	)
}

export default MobileSignInOut
