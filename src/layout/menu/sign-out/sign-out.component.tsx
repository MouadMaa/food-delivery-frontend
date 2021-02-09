import { auth } from '@/firebase/firebase'
import { FC } from 'react'

import { StyledSignOut } from './sign-out.styles'
import { LogOutSvg } from './sign-out.svg'

const SignOut: FC = () => {
	const signOut = async () => {
		await auth.signOut()
	}

	return (
		<StyledSignOut onClick={signOut}>
			<LogOutSvg />
			<span>Sign Out</span>
		</StyledSignOut>
	)
}

export default SignOut
