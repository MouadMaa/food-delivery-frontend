import React, { FC, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import nookies from 'nookies'
import tw from 'twin.macro'

import { auth, firebaseUIConfig } from '@/firebase/firebase'
import { firebaseAdmin } from '@/firebase/firebase.admin'

const Auth: FC = () => {
	const router = useRouter()

	useEffect(() => {
		return auth.onAuthStateChanged((user) => user && router.push('/'))
	}, [])

	return (
		<StyledAuth style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
		</StyledAuth>
	)
}

export default Auth

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const cookies = nookies.get(context)
		const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
		if (token) {
			return {
				redirect: {
					permanent: false,
					destination: '/',
				},
			}
		}
	} catch (error) {
		return { props: {} }
	}
}

const StyledAuth = tw.section`
	flex items-center justify-center min-h-screen
`
