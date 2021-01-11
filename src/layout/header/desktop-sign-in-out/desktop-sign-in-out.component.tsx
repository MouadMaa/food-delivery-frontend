import { FC } from 'react'

import { Button } from '@/components/ui'
import { StyledDesktopSignInOut } from './desktop-sign-in-out.styles'

const DesktopSignInOut: FC = () => {
	return (
		<StyledDesktopSignInOut>
			<Button text='Create Account' />
			<Button text='Sign In' level='Secondary' />
		</StyledDesktopSignInOut>
	)
}

export default DesktopSignInOut
