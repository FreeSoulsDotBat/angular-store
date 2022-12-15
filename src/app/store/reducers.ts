import { ActionReducerMap } from '@ngrx/store'
import { counterReducer } from './counter/counter.reducer'
import { productsReducer } from './product/product.reducer'
import { AppState } from './state'

export const appReducers: ActionReducerMap<AppState> = {
	counter: counterReducer,
	products: productsReducer
}
