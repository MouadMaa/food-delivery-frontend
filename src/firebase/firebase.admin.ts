import * as admin from 'firebase-admin'

const privateKey = process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n')
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
const projectId = process.env.FIREBASE_PROJECT_ID

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey,
      clientEmail,
      projectId,
    }),
    databaseURL: `https://${projectId}.firebaseio.com`,
  })
}

export { admin }
