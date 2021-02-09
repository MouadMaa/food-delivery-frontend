import { useEffect } from 'react'
import { useRecoilSnapshot } from 'recoil'

export const useRecoilDebugObserver = () => {
	const snapshot = useRecoilSnapshot()
	useEffect(
		() => {
			for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
				console.log(node.key, snapshot.getLoadable(node).contents)
			}
		},
		[ snapshot ],
	)
}
