import {
	SECRET_FIREBASE_CLIENT_EMAIL,
	SECRET_FIREBASE_KEY,
	SECRET_FIREBASE_PROJECT_ID
} from '$env/static/private';
import admin from 'firebase-admin';

export const firebase =
	admin.apps.length > 0
		? admin.app()
		: admin.initializeApp({
				credential: admin.credential.cert({
					projectId: SECRET_FIREBASE_PROJECT_ID,
					clientEmail: SECRET_FIREBASE_CLIENT_EMAIL,
					privateKey: SECRET_FIREBASE_KEY
				})
		  });
