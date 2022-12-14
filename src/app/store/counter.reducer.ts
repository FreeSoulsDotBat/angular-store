import { Action } from '@ngrx/store'
import { CounterActionType } from './state'

export const counterReducer = (state: number = 0, action: Action): number => {
	switch (action.type) {
		case CounterActionType.INCREMENT:
			return state + 1
		case CounterActionType.DECREMENT:
			return state - 1
		default:
			return state
	}
}
