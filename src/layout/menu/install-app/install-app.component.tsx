import { FC, useEffect, useState } from 'react'

import { IconButton } from '@/components/ui'

let deferredPrompt: any = null

const InstallApp: FC = () => {
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later.
      deferredPrompt = e
      // Update UI notify the user they can install the PWA
      // showInstallPromotion()
    })

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true)
    })
  }, [])

  const handleClick = async () => {
    // Hide the app provided install promotion
    // hideInstallPromotion()
    // Show the install prompt
    deferredPrompt.prompt()
    // Wait for the user to respond to the prompt
    // const { outcome } = await deferredPrompt.userChoice
    // Optionally, send analytics event with outcome of user choice
    // console.log(`User response to the install prompt: ${outcome}`)
    // if (outcome === 'accepted') {
    //   console.log('User accepted the A2HS prompt')
    // } else {
    //   console.log('User dismissed the A2HS prompt')
    // }
    // We've used the prompt, and can't use it again, throw it away
    deferredPrompt = null
  }

  return !isInstalled ? (
    <IconButton onClick={handleClick}>Added to your home screen</IconButton>
  ) : null
}

export default InstallApp
