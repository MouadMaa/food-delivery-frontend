import { FC } from 'react'
import { useRecoilValue } from 'recoil'

import { userState } from '@/store/user/user.state'
import { StyledAvatar } from './avatar.styles'

const Avatar: FC = () => {
	const user = useRecoilValue(userState)

	return (
		<StyledAvatar>
			<img
				src='https://mir-s3-cdn-cf.behance.net/projects/404/2dddad80086231.Y3JvcCwzMDAwLDIzNDYsMCw0MDg.jpg'
				alt='user photo'
			/>
			<span>+212...{user.phone.substr(-3, 3)}</span>
		</StyledAvatar>
	)
}

export default Avatar
