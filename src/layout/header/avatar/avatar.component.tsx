import { FC } from 'react'

import { StyledAvatar } from './avatar.styles'

const Avatar: FC = () => {
	return (
		<StyledAvatar className='group'>
			<img
				src='https://mir-s3-cdn-cf.behance.net/projects/404/2dddad80086231.Y3JvcCwzMDAwLDIzNDYsMCw0MDg.jpg'
				alt='suzy bae'
			/>
			<span>Suzy Bae</span>
		</StyledAvatar>
	)
}

export default Avatar
