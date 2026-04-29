import {
	collection,
	doc,
	getDocs,
	getDoc,
	setDoc,
	addDoc,
	deleteDoc,
	updateDoc,
	query,
	orderBy,
	limit,
	startAfter,
	where,
	type CollectionReference,
	type DocumentData,
} from 'firebase/firestore/lite'
import db from '@/shared/config/firebase-config'
import type {
	PaginationParams,
	PaginationResult,
	ListResult,
	DocumentResult,
} from './DbOperations.types'

class DbOperations {
	private collectionRef: CollectionReference<DocumentData>

	constructor(name: string) {
		this.collectionRef = collection(db, name)
	}

	async getAllPaginated({
		userId,
		page = 1,
		perPage = 6,
		cursors = []
	}: PaginationParams): Promise<PaginationResult> {
		let q

		const realLimit = perPage + 1

		if (page === 1) {
			q = query(
				this.collectionRef,
				where('ownerId', '==', userId),
				orderBy('title'),
				limit(realLimit)
			)
		} else {
			const cursor = cursors[page - 2]
			if (!cursor) throw new Error('Cursor not found')

			q = query(
				this.collectionRef,
				where('ownerId', '==', userId),
				orderBy('title'),
				startAfter(cursor),
				limit(realLimit)
			)
		}

		const snapshot = await getDocs(q)
		const docs = snapshot.docs

		const hasMore = docs.length > perPage

		const data = docs
			.slice(0, perPage)
			.map((doc) => ({ id: doc.id, ...doc.data() }))

		const lastVisible = docs[docs.length - 2] || null

		return { data, cursor: lastVisible, hasMore }
	}

	// async getList() {
	// 	const snapshot = await getDocs(this.collectionRef)
	// 	const docs = snapshot.docs

	// 	const data = docs.length
	// 		? docs.map((doc) => ({ id: doc.id, ...doc.data() }))
	// 		: []

	// 	return { data }
	// }
	async getList(userId: string): Promise<ListResult> {
		const q = query(
			this.collectionRef,
			where('ownerId', '==', userId)
		)

		const snapshot = await getDocs(q)
		const docs = snapshot.docs

		const data = docs.length
			? docs.map((doc) => ({ id: doc.id, ...doc.data() }))
			: []

		return { data }
	}

	async getAll(): Promise<ListResult> {
		const snapshot = await getDocs(this.collectionRef)
		const docs = snapshot.docs

		const data = docs.length
			? docs.map((doc) => ({ id: doc.id, ...doc.data() }))
			: []

		return { data }
	}

	async getById(id: string): Promise<DocumentResult | undefined> {
		const snap = await getDoc(doc(this.collectionRef, id))
		if (!snap.exists()) return undefined
		return { id: snap.id, ...snap.data() }
	}

	async setWithId(id: string, data: DocumentData): Promise<boolean> {
		await setDoc(doc(this.collectionRef, id), data)
		return true
	}

	// async add(data) {
	// 	await addDoc(this.collectionRef, data)
	// 	return true
	// }
	async add(data: DocumentData, userId: string): Promise<boolean> {
		await addDoc(this.collectionRef, {
			...data,
			ownerId: userId
		})
		return true
	}

	async update(id: string, data: Partial<DocumentData>): Promise<boolean> {
		await updateDoc(doc(this.collectionRef, id), data)
		return true
	}

	async delete(id: string): Promise<boolean> {
		await deleteDoc(doc(this.collectionRef, id))
		return true
	}
}

export default DbOperations