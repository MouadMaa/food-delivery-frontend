import { FC } from 'react'

import { StyledSignOut } from './sign-out.styles'
import { LogOutSvg } from './sign-out.svg'

const SignOut: FC = () => {
	return (
		<StyledSignOut>
			<LogOutSvg />
			<span>Sign Out</span>
		</StyledSignOut>
	)
}

export default SignOut
