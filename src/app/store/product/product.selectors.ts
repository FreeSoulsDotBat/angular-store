import { createSelector } from '@ngrx/store'
import { AppState } from '../state'
import { Product } from './product.state'

const productManagement = (state: AppState): Product[] => state.products

export const selectProducts = createSelector(
	productManagement,
	(state: Product[]) => state
)
