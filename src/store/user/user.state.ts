import { atom } from 'recoil'

import { UserState } from './user.types'

export const userState = atom<UserState>({
	key: 'userState',
	default: null,
})
