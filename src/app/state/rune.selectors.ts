import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Rune } from '../models/rune';

export const selectRunes = createFeatureSelector<ReadonlyArray<Rune>>('runes');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<number>
>('collection');

export const selectRuneCollection = createSelector(
  selectRunes,
  selectCollectionState,
  (runes, collection) => {
    return collection.map((id) => runes.find((rune) => rune.id === id)!);
  }
);
