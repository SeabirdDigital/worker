// Import the functions you need from the SDKs you nee
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
