import { atom } from 'recoil'

interface UserState {
	id: string
	phone: string
}

export const userState = atom<UserState>({
	key: 'userState',
	default: null,
})
