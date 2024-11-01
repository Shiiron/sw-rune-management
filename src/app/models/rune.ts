import { LabelEntity } from "./labelEntity"
import { ValueEntity } from "./valueEntity"

export class Rune {
  id: number;
  equipped_monster_id: number;
  slot_no: 1 | 2 | 3 | 4 | 5 | 6;
  stars: 1 | 2 | 3 | 4 | 5 | 6;
  set: LabelEntity;
  main_stat: ValueEntity;
  prefix_stat: ValueEntity;
  secondary_stats: ValueEntity[];
  base_rarity: string;
  current_uprade: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  efficence?: number; // nombre en % issue d'un calcul pour déterminé l'efficience de la rune
  proc_efficence?: number; // number compris entre 0 et 8 qui donne le niveau d'efficience des procs de la rune (O = blanc, 8 = leg)
}
