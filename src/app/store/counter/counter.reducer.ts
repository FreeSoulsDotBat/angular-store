import { Action, createReducer, on } from '@ngrx/store'
import { decrementCounter, incrementCounter } from './counter.actions'
import { CounterActionType } from './counter.models'
import { CounterInitialState } from './counter.state'

// export const counterReducer = (state: number = 0, action: Action): number => {
// 	switch (action.type) {
// 		case CounterActionType.Increment:
// 			return state + 1
// 		case CounterActionType.Decrement:
// 			return state - 1
// 		default:
// 			return state
// 	}
// }

export const counterReducer = (state: number = 0, action: Action): number => {
	return reducer(state, action)
}

const reducer = createReducer(
	CounterInitialState,
	on(incrementCounter, (state): number => state + 1),
	on(decrementCounter, (state): number => state - 1)
)
