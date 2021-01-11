import { FC, useState } from 'react'

import { IconButton, Dropdown } from '@/components/ui'
import { StyledMobileSign } from './mobile-sign-in-out.styles'
import { UserSvg } from './mobile-sign-in-out.svg'

const MobileSignInOut: FC = () => {
	const [ isOpenDropdown, setIsOpenDropdown ] = useState(false)

	const itemsDropdown = [
		{ text: 'Sign In', onClick: () => console.log('Sign In') },
		{ text: 'Create Account', onClick: () => console.log('Create Account') },
	]

	return (
		<StyledMobileSign onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
			<IconButton>
				<UserSvg />
			</IconButton>
			<Dropdown isOpen={isOpenDropdown} close={() => setIsOpenDropdown(false)} items={itemsDropdown} />
		</StyledMobileSign>
	)
}

export default MobileSignInOut
