// Get doc data and merge doc.id
export const getDocData = <T>(doc: any): T | null => {
	return doc.exists ? { id: doc.id, ...doc.data() } : null
}

// Get array of doc data from collection
export const getCollectionData = <T>(collection: any): T[] => {
	return collection.docs.map(getDocData) || []
}
