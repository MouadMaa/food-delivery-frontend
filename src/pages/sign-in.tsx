import { FC, useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { auth, firebaseUIConfig } from '@/firebase/firebase'

const SignUpIn: FC = () => {
	const [ isSignedIn, setIsSignedIn ] = useState(false)

	useEffect(() => {
		const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
			console.log('user', user)
			setIsSignedIn(!!user)
		})
		return () => unregisterAuthObserver()
	}, [])

	if (!isSignedIn) {
		return (
			<div>
				<h1>My App</h1>
				<p>Please sign-in:</p>
				<StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
			</div>
		)
	}
	return (
		<div>
			<h1>My App</h1>
			<p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>
			<a onClick={() => auth.signOut()}>Sign-out</a>
		</div>
	)
}

export default SignUpIn
