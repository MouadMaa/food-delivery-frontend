import { FC } from 'react'

import { auth } from '@/firebase/firebase'
import { useSetSideMenuState } from '@/store/app/app.state'
import { StyledSignOut } from './sign-out.styles'
import { LogOutSvg } from './sign-out.svg'

const SignOut: FC = () => {
	const setIsSideMenuOpen = useSetSideMenuState()

	const signOut = async () => {
		await auth.signOut()
		setIsSideMenuOpen(false)
	}

	return (
		<StyledSignOut onClick={signOut}>
			<LogOutSvg />
			<span>Sign Out</span>
		</StyledSignOut>
	)
}

export default SignOut
