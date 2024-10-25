import { createActionGroup, props } from '@ngrx/store';
import { Rune } from '../models/rune';

export const RuneActions = createActionGroup({
  source: 'Rune',
  events: {
    'Load': props<{runes: Rune[]}>(),
    'Add sell rune': props<{runeId: number}>(),
    'Remove sell rune': props<{runeId: number}>()
  }
})
