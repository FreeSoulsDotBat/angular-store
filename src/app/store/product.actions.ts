import { createAction, props } from '@ngrx/store'
import { ProductState } from './product.state'

export const ProductActionType = {
	Create: '[Product] Create',
	Delete: '[Product] Delete',
	Update: '[Product] Update',
	Get: '[Product] Get'
}

export const createProduct = createAction(
	ProductActionType.Create,
	props<{ payload: { name: string; code: number } }>()
)

export const deleteProduct = createAction(
	ProductActionType.Delete,
	props<{ id: number }>()
)

export const updateProduct = createAction(
	ProductActionType.Update,
	props<{ payload: ProductState }>()
)

export const getProduct = createAction
