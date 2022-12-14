import { ProductState } from './product.state'

export interface AppState {
	counter: number
	products: ProductState[]
}

export const CounterActionType = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT'
}
