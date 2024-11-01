export interface SwRune {
  rune_id:       number;
  wizard_id:     number; // Id of summoners war account
  occupied_type: number; // 1, rune is equipped; 2, rune in inventory
  occupied_id:   number; // id of the monster equipped with the rune
  slot_no:       1 | 2 | 3 | 4 | 5 | 6;
  rank:          1 | 2 | 3 | 4 | 5; // Rune current rarity
  class:         1 | 2 | 3 | 4 | 5 | 6; // number of stars of the rune
  set_id:        number;
  upgrade_limit: number;
  upgrade_curr:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  base_value:    number;
  sell_value:    number;
  pri_eff:       number[]; // principal stat
  prefix_eff:    number[]; // prefix stat
  sec_eff:       Array<number[]>; //secondary stats
  extra:         number; // base rarity of the rune
}
