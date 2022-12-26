import { credential, initializeApp } from 'firebase-admin';
import {
	SECRET_FIREBASE_PROJECT_ID,
	SECRET_FIREBASE_CLIENT_EMAIL,
	SECRET_FIREBASE_KEY
} from '$env/static/private';

initializeApp({
	credential: credential.cert({
		projectId: SECRET_FIREBASE_PROJECT_ID,
		clientEmail: SECRET_FIREBASE_CLIENT_EMAIL,
		privateKey: SECRET_FIREBASE_KEY
	})
});
