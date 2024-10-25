import { createReducer, on } from '@ngrx/store';
import { RuneActions } from './rune.actions';

export const initialState: ReadonlyArray<number> = [];

export const collectionReducer = createReducer(
  initialState,
  on(RuneActions.removeSellRune, (state, { runeId }) =>
    state.filter((id) => id !== runeId)
  ),
  on(RuneActions.addSellRune, (state, { runeId }) => {
    if (state.indexOf(runeId) > -1) return state;

    return [...state, runeId];
  })
);
