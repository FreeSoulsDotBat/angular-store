import { Action } from '@ngrx/store'
import { Product } from './product.state'

export interface ProductsAction extends Action {
	payload?: Product
}
