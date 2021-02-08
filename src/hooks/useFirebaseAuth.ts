import { useEffect } from 'react'
import { atom, useSetRecoilState } from 'recoil'
import nookies from 'nookies'

import { auth } from '@/firebase/firebase'

export const userState = atom({
	key: 'userState', // unique ID (with respect to other atoms/selectors)
	default: null, // default value (aka initial value)
})

export const useFirebaseAuth = () => {
	const setUser = useSetRecoilState(userState)

	useEffect(() => {
		return auth.onIdTokenChanged(async (user) => {
			if (user) {
				setUser({
					id: user.uid,
					name: user.displayName,
					phone: user.phoneNumber,
				})
				const token = await user.getIdToken()
				nookies.set(undefined, 'token', token)
			} else {
				setUser(null)
				nookies.set(undefined, 'token', '')
			}
		})
	}, [])

	useEffect(() => {
		const handle = setInterval(async () => {
			const user = auth.currentUser
			if (user) await user.getIdToken(true)
		}, 10 * 60 * 1000)

		return () => clearInterval(handle)
	}, [])
}
