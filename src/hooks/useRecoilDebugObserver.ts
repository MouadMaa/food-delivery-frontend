import { useEffect } from 'react'
import { useRecoilSnapshot } from 'recoil'

export const useRecoilDebugObserver = () => {
	const snapshot = useRecoilSnapshot()
	useEffect(
		() => {
			if (process.env.NODE_ENV !== 'production') {
				for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
					console.log(node.key, snapshot.getLoadable(node).contents)
				}
			}
		},
		[ snapshot ],
	)
}
