import { createReducer, on } from '@ngrx/store';
import { Rune } from '../models/rune';
import { RuneActions } from './rune.actions';

export const initialState: ReadonlyArray<Rune> = [];

export const runeReducer = createReducer(
  initialState,
  on(RuneActions.load, (_state, { runes }) => runes)
);
