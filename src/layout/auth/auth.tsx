import { FC, useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { auth, firebaseUIConfig } from '@/firebase/firebase'
import { useShowAuthModalState } from '@/store/global/global.state'
import { useSetUserLoadingState, useUserState } from '@/store/user/user.state'
import { Modal } from '@/components/ui'

const Auth: FC = () => {
  const [, setUser] = useUserState()
  const setUserLoading = useSetUserLoadingState()
  const [showAuthModal, setShowAuthModal] = useShowAuthModalState()

  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser({
          id: user.uid,
          phone: user.phoneNumber as string,
        })
        onHide()
      } else {
        setUser(null)
      }
      setUserLoading(false)
    })
  }, [])

  const onHide = () => setShowAuthModal(false)

  return (
    <Modal show={showAuthModal} onHide={onHide}>
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    </Modal>
  )
}

export default Auth
