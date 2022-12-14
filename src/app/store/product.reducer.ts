import { Action } from '@ngrx/store'
import { ProductState } from './product.state'
import { ProductActionType } from './product.actions'

export interface ProductsAction extends Action {
	payload?: ProductState
}

export const productsReducer = (
	state: ProductState[] = [],
	action: ProductsAction
): ProductState[] => {
	switch (action.type) {
		case ProductActionType.Create:
			return [...state, { ...action.payload }]
		case ProductActionType.Delete:
			return state.filter((p) => p.id !== action.payload?.id)
		case ProductActionType.Update:
			let product = state.find((p) => action.payload.id === p.id)
			product = { ...product, ...action.payload }
			const products = state.filter((p) => action.payload.id !== p.id)

			return [product, ...products]
		default:
			return state
	}
}
