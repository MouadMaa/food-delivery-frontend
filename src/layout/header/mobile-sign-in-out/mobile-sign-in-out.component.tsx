import { FC, useState } from 'react'

import { IconButton, Dropdown } from '@/components/ui'
import { StyledMobileSign } from './mobile-sign-in-out.styles'
import { UserSvg } from './mobile-sign-in-out.svg'

const MobileSignInOut: FC = () => {
	const [ isOpenDropdown, setIsOpenDropdown ] = useState(false)
	const [ selected, setSelected ] = useState('')

	const itemsDropdown = [ 'Sign In', 'Create Account' ]

	return (
		<StyledMobileSign onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
			<IconButton>
				<UserSvg />
			</IconButton>

			<Dropdown
				isOpen={isOpenDropdown}
				close={() => setIsOpenDropdown(false)}
				items={itemsDropdown}
				onSelect={setSelected}
			/>
		</StyledMobileSign>
	)
}

export default MobileSignInOut
