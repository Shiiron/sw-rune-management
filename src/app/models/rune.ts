export interface Rune {
  rune_id: number // id de la rune
  occupied_id: number // 0: non équipé, si > 0: id du monstre équipé
  slot_no: number // Slot de la rune (de 1 a 6)
  rank: number // Rareté de la rune (1 blanc, 2 vert, 3 bleu, 4 violet, 5 leg)
  class: number // Nombre d'étoile
  set_id: number // set de la rune (vio, energy etc...)
  upgrade_curr: number // niveau d'upgrade actuel de la rune (max 15)
  pri_eff: number[] // Stat principal
  prefix_eff: number[] // Stat innate
  sec_eff: [number[]?, number[]?, number[]?, number[]?]
  extra: number // Rareté base de la rune. une rune + 12 sera toujours legendaire mais de base peut etre bleu

  id: number;
  equipped_id: number;
  slot: 1 | 2 | 3 | 4 | 5 | 6;
  stars: 1 | 2 | 3 | 4 | 5 | 6;
  set: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 5 | 6; 

}
