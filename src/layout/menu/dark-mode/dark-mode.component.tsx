import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Switch } from '@/components/ui'

const DarkMode: FC = () => {
	const { theme, setTheme } = useTheme()

	const [ isMounted, setIsMounted ] = useState(false)
	const [ isDarkMode, setIsDarkMode ] = useState(false)

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

	return <Switch text={`Switch To ${isDarkMode ? 'Light' : 'Dark'} Mode`} value={isDarkMode} onClick={switchTheme} />
}

export default DarkMode
