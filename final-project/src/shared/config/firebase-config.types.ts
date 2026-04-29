import type { User } from 'firebase/auth'

export interface FirebaseConfig {
	apiKey: string
	authDomain: string
	projectId: string
	storageBucket: string
	messagingSenderId: string
	appId: string
}

export interface MappedUser {
	uid: string
	email: string | null
	displayName: string | null
	photoURL: string | null
	role: string
}

export type MapFirebaseUser = (user: User | null) => MappedUser | null