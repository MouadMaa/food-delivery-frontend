import { atom, useRecoilValue } from 'recoil'

import { UserState } from './user.types'

export const userState = atom<UserState>({
	key: 'userState',
	default: null,
})

export const useUserValue = () => useRecoilValue(userState)
