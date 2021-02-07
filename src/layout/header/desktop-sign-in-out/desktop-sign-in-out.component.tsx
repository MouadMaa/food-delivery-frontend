import { FC } from 'react'
import { useRouter } from 'next/router'

import { Button } from '@/components/ui'
import { StyledDesktopSignInOut } from './desktop-sign-in-out.styles'

const DesktopSignInOut: FC = () => {
	const router = useRouter()

	const signIn = () => router.push('/sign-in')

	return (
		<StyledDesktopSignInOut>
			<Button text='Create Account' onClick={signIn} />
			<Button text='Sign In' level='Secondary' onClick={signIn} />
		</StyledDesktopSignInOut>
	)
}

export default DesktopSignInOut
