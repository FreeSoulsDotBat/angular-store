import { createAction, props } from '@ngrx/store'
import { Product } from './product.state'

export const ProductActionType = {
	Create: '[Product] Create',
	Delete: '[Product] Delete',
	Update: '[Product] Update'
}

export const createProduct = createAction(
	ProductActionType.Create,
	props<{ payload: Product }>()
)

export const deleteProduct = createAction(
	ProductActionType.Delete,
	props<{ id: number }>()
)

export const updateProduct = createAction(
	ProductActionType.Update,
	props<{ payload: Product }>()
)
