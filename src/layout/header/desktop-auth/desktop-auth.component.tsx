import { FC } from 'react'
import { useRouter } from 'next/router'

import { Button } from '@/components/ui'
import { StyledDesktopSignInOut } from './desktop-auth.styles'

const DesktopAuth: FC = () => {
	const router = useRouter()

	const signIn = () => router.push('/auth')

	return (
		<StyledDesktopSignInOut>
			<Button text='Create Account' onClick={signIn} />
			<Button text='Sign In' level='Secondary' onClick={signIn} />
		</StyledDesktopSignInOut>
	)
}

export default DesktopAuth