import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
}

export default firebase

// Firestore exports
export const db = firebase.firestore()

// Auth exports
export const auth = firebase.auth()

// Firebase ui config
export const firebaseUIConfig = {
	signInFlow: 'popup',
	signInOptions: [
		{
			provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
			defaultCountry: 'MA',
		},
	],
	callbacks: {
		signInSuccessWithAuthResult: () => false,
	},
}
