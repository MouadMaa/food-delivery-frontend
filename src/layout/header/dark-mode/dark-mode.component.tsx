import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { IconButton } from '@/components/ui'
import { MoonSvg, SunSvg } from './dark-mode.svg'
import { StyledDarkMode } from './dark-mode.styled'

const DarkMode: FC = () => {
  const { theme, setTheme } = useTheme()

  const [isMounted, setIsMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsDarkMode(theme === 'dark')
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
      setIsDarkMode(!isDarkMode)
    }
  }

  return (
    <StyledDarkMode>
      <IconButton onClick={switchTheme}>
        {theme === 'light' && <SunSvg />}
        {theme === 'dark' && <MoonSvg />}
      </IconButton>
    </StyledDarkMode>
  )
}

export default DarkMode
