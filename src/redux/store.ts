import { useMemo } from 'react'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import reducers from './reducers'

const middleWares = [ logger ]

let store = undefined

const initStore = (preloadedState: any) => createStore(reducers, preloadedState, applyMiddleware(...middleWares))

export const useStore = (initialState: any) => useMemo(() => initializeStore(initialState), [ initialState ])

export const initializeStore = (preloadedState = undefined) => {
	let _store = store || initStore(preloadedState)

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		})
		// Reset the current store
		store = undefined
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store
	// Create the store once in the client
	if (!store) store = _store

	return _store
}
