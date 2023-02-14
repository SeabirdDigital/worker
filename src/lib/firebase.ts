import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAfvAPt2jqXL6eBBev6ZXV4JJOKx3kcv6g',
	authDomain: 'seabirdportal.firebaseapp.com',
	projectId: 'seabirdportal',
	storageBucket: 'seabirdportal.appspot.com',
	messagingSenderId: '393340581155',
	appId: '1:393340581155:web:61b049b42c9175f29f0896',
	measurementId: 'G-1EMQWW6RGR'
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase

export const storage = getStorage(firebase);
export const database = getFirestore(firebase);
export const auth = getAuth(firebase);