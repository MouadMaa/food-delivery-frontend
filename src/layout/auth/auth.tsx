import { FC, useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { setCookie, destroyCookie } from 'nookies'

import { auth, firebaseUIConfig } from '@/firebase/firebase'
import { useShowAuthModalState } from '@/store/global/global.state'
import { useSetUserLoadingState, useUserState } from '@/store/user/user.state'
import { Modal } from '@/components/ui'
import { TOKEN_NAME } from '@/store/user/user.types'

const Auth: FC = () => {
  const [, setUser] = useUserState()
  const setUserLoading = useSetUserLoadingState()

  const [showAuthModal, setShowAuthModal] = useShowAuthModalState()

  // useEffect(() => {
  //   return auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       setUser({
  //         id: user.uid,
  //         phone: user.phoneNumber as string,
  //       })
  //       setShowAuthModal(false)
  //     } else {
  //       setUser(null)
  //     }
  //     setUserLoading(false)
  //   })
  // }, [])

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (user) {
        setUser({
          id: user.uid,
          phone: user.phoneNumber as string,
        })
        const token = await user.getIdToken()
        setCookie(null, TOKEN_NAME, token)
        setShowAuthModal(false)
      } else {
        setUser(null)
        destroyCookie(null, TOKEN_NAME)
      }
      setUserLoading(false)
    })
  }, [])

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)

    return () => clearInterval(handle)
  }, [])

  const onHide = () => setShowAuthModal(false)

  return (
    <Modal show={showAuthModal} onHide={onHide}>
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    </Modal>
  )
}

export default Auth
