import { FC, useState } from 'react'

import IconButton from '@/components/ui/icon-button/icon-button.component'
import Dropdown from '@/components/ui/dropdown/dropdown.component'
import { StyledMobileSign } from './mobile-sign.styles'

const MobileSign: FC = () => {
	const [ isOpenDropdown, setIsOpenDropdown ] = useState(false)

	const itemsDropdown = [
		{ text: 'Sign In', onClick: () => console.log('Sign In') },
		{ text: 'Create Account', onClick: () => console.log('Create Account') },
	]

	return (
		<StyledMobileSign onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
			<IconButton>
				<UserSvg />
			</IconButton>
			<Dropdown isOpen={isOpenDropdown} close={() => setIsOpenDropdown(false)} items={itemsDropdown} />
		</StyledMobileSign>
	)
}

export default MobileSign

const UserSvg = () => (
	<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<circle cx='11.579' cy='7.278' r='4.778' strokeLinecap='round' strokeLinejoin='round' />
		<path
			clipRule='evenodd'
			d='M4 18.701a2.215 2.215 0 01.22-.97c.457-.915 1.748-1.4 2.819-1.62a16.778 16.778 0 012.343-.33 25.04 25.04 0 014.385 0c.787.056 1.57.166 2.343.33 1.07.22 2.361.659 2.82 1.62a2.27 2.27 0 010 1.95c-.459.96-1.75 1.4-2.82 1.61-.772.172-1.555.286-2.343.34-1.188.1-2.38.118-3.57.054-.275 0-.54 0-.815-.055a15.417 15.417 0 01-2.334-.338c-1.08-.21-2.361-.65-2.828-1.611A2.28 2.28 0 014 18.7z'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
