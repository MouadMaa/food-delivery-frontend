import { FC, useState } from 'react'

import { IconButton, Dropdown } from '@/components/ui'
import { StyledMobileSign } from './mobile-sign-in-out.styles'
import { UserSvg } from './mobile-sign-in-out.svg'
import { useRouter } from 'next/router'

const MobileSignInOut: FC = () => {
	const router = useRouter()

	const [ show, setShowDropdown ] = useState(false)

	const signIn = () => router.push('/auth')

	const itemsDropdown = [ 'Sign In', 'Create Account' ]

	return (
		<StyledMobileSign onClick={() => setShowDropdown(!show)}>
			<IconButton>
				<UserSvg />
			</IconButton>

			<Dropdown isOpen={show} onHide={() => setShowDropdown(false)} items={itemsDropdown} onSelect={signIn} />
		</StyledMobileSign>
	)
}

export default MobileSignInOut
