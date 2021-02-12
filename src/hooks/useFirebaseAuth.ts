import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import nookies from 'nookies'

import { auth } from '@/firebase/firebase'
import { userState, useSetUserLoadingState } from '@/store/user/user.state'

export const useFirebaseAuth = () => {
	const setUser = useSetRecoilState(userState)
	const setUserLoading = useSetUserLoadingState()

	useEffect(() => {
		return auth.onIdTokenChanged(async (user) => {
			if (user) {
				setUser({
					id: user.uid,
					phone: user.phoneNumber,
				})
				setUserLoading(false)
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
