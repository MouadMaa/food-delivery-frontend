import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { UserState } from './user.types'

export const userState = atom<UserState | null>({
  key: 'userState',
  default: null,
})

export const useUserValue = () => useRecoilValue(userState)
export const useSetUserState = () => useSetRecoilState(userState)
export const useUserState = () => useRecoilState(userState)

export const userLoadingState = atom({
  key: 'userLoadingState',
  default: true,
})

export const useUserLoadingValue = () => useRecoilValue(userLoadingState)
export const useSetUserLoadingState = () => useSetRecoilState(userLoadingState)
