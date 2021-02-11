import { categoriesState } from './category/category.state'
import { restaurantsState } from './restaurant/restaurant.state'

export const initializeState = (initState: unknown) => ({ set }) =>
	Object.keys(initState).map((key) => {
		const atom = atoms[key]
		const value = initState[key]
		set(atom, value)
	})

const atoms = {
	categoriesState,
	restaurantsState,
}
