import { FC } from 'react'
import { useRecoilValue } from 'recoil'
// import Image from 'next/image'

import { userState } from '@/store/user/user.state'
import { StyledAvatar } from './avatar.styles'
import { AvatarSvg } from './avatar.svg'

const Avatar: FC = () => {
  const user = useRecoilValue(userState)

  return (
    <StyledAvatar>
      {/* <Image
				src={'https://mir-s3-cdn-cf.behance.net/projects/404/2dddad80086231.Y3JvcCwzMDAwLDIzNDYsMCw0MDg.jpg'}
				alt='user photo'
				width={128}
				height={128}
			/> */}
      <span>
        <AvatarSvg />
      </span>
      {user && <p>{`${user.phone.substr(0, 4)}...${user.phone.substr(-3, 3)}`}</p>}
    </StyledAvatar>
  )
}

export default Avatar
