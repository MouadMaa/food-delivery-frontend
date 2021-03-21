import { atom, useRecoilState, useSetRecoilState } from 'recoil'

export const sideMenuState = atom({
  key: 'sideMenuState',
  default: false,
})

export const useSideMenuState = () => useRecoilState(sideMenuState)
export const useSetSideMenuState = () => useSetRecoilState(sideMenuState)

export const showAuthModalState = atom({
  key: 'showAuthModalState',
  default: false,
})

export const useShowAuthModalState = () => useRecoilState(showAuthModalState)
export const useSetShowAuthModalState = () => useSetRecoilState(showAuthModalState)
