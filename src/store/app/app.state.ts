import { atom, useRecoilState, useSetRecoilState } from 'recoil'

export const sideMenuState = atom({
	key: 'sideMenuState',
	default: false,
})

export const useSideMenuState = () => useRecoilState(sideMenuState)
export const useSetSideMenuState = () => useSetRecoilState(sideMenuState)
