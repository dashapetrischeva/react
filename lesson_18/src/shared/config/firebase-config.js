import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
	apiKey: 'AIzaSyD8A2SbK-Jj1O9c4SAS08LH9nWkagTD3Rw',
	authDomain: 'dream-planner-6aa4c.firebaseapp.com',
	projectId: 'dream-planner-6aa4c',
	storageBucket: 'dream-planner-6aa4c.firebasestorage.app',
	messagingSenderId: '62662871837',
	appId: '1:62662871837:web:8c975292beec863242eff4',
}
// Ініціалізація Firebase App
const app = initializeApp(firebaseConfig)
// Експорт об'єкта авторизації Firebase
export const auth = getAuth(app)
// Експорт Firestore (база даних)
export const db = getFirestore(app)
// Провайдер Google для авторизації через Google-акаунт
export const googleProvider = new GoogleAuthProvider()
// Експорт бази даних за замовчуванням
export default db
// Перетворює Firebase user на plain object
function mapFirebaseUser(user) {
	if (!user) return null
	return {
		uid: user.uid,
		email: user.email,
		displayName: user.displayName,
		photoURL: user.photoURL,
		// Додаємо роль
		role: user.role || 'user',
	}
}