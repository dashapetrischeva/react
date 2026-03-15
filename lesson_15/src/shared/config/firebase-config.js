import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
	apiKey: 'AIzaSyD8A2SbK-Jj1O9c4SAS08LH9nWkagTD3Rw',
	authDomain: 'dream-planner-6aa4c.firebaseapp.com',
	projectId: 'dream-planner-6aa4c',
	storageBucket: 'dream-planner-6aa4c.firebasestorage.app',
	messagingSenderId: '62662871837',
	appId: '1:62662871837:web:8c975292beec863242eff4',
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db
