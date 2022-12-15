import { createSelector } from '@ngrx/store'
import { AppState } from '../state'

const counterManagement = (state: AppState): number => state.counter

export const selectCounter = createSelector(
	counterManagement,
	(state: number) => state
)
