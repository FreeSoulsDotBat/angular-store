import { createReducer, on } from '@ngrx/store'
import { ProductsAction } from './product.models'
import { createProduct, deleteProduct, updateProduct } from './product.actions'
import { Product, ProductInitialState } from './product.state'

// export const productsReducer = (
// 	state: Product[] = [],
// 	action: ProductsAction
// ): Product[] => {
// 	switch (action.type) {
// 		case ProductActionType.Create:
// 			return [...state, { ...action.payload }]
// 		case ProductActionType.Delete:
// 			return state.filter((p) => p.id !== action.payload?.id)
// 		case ProductActionType.Update:
// 			let product = state.find((p) => action.payload.id === p.id)
// 			product = { ...product, ...action.payload }
// 			const products = state.filter((p) => action.payload.id !== p.id)

// 			return [product, ...products]
// 		default:
// 			return state
// 	}
// }

export const productsReducer = (
	state: Product[] = [],
	action: ProductsAction
): Product[] => {
	return reducer(state, action)
}

const reducer = createReducer(
	ProductInitialState,
	on(createProduct, (state, action): Product[] => [
		...state,
		{ ...action.payload }
	]),
	on(deleteProduct, (state, action) =>
		state.filter((p) => p.id !== action.id)
	),
	on(updateProduct, (state, action) => {
		let product = state.find((p) => action.payload.id === p.id)
		product = { ...product, ...action.payload }
		const products = state.filter((p) => action.payload.id !== p.id)

		return [product, ...products]
	})
)
