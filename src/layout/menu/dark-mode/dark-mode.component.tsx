import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Switch } from '@/components/ui'

const DarkMode: FC = () => {
	const { theme, setTheme } = useTheme()

	const [ isMounted, setIsMounted ] = useState(false)
	const [ darkMode, setDarkMode ] = useState(false)

	useEffect(() => {
		setIsMounted(true)
		setDarkMode(theme === 'dark')
	}, [])

	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === 'light' ? 'dark' : 'light')
			setDarkMode(!darkMode)
		}
	}

	return (
		<Switch
			name='dark-mode'
			label={`Switch To ${darkMode ? 'Dark' : 'Light'} Mode`}
			value={darkMode}
			onChange={switchTheme}
		/>
	)
}

export default DarkMode
