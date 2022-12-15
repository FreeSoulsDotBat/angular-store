import { createAction, props } from '@ngrx/store'
import { CounterActionType } from './counter.models'

export const incrementCounter = createAction(CounterActionType.Increment)
export const decrementCounter = createAction(CounterActionType.Decrement)
