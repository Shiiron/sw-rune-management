import { Component } from '@angular/core';
import { runeSets } from 'src/app/enums/rune-set';
import { statEffect } from 'src/app/enums/stat-effect';
import { Rune } from 'src/app/models/rune';
import { SwRune } from 'src/app/models/sw-rune';
import { Store } from '@ngrx/store';
import { RuneActions } from 'src/app/state/rune.actions';

@Component({
  selector: 'app-import-json',
  templateUrl: './import-json.component.html',
  styleUrls: ['./import-json.component.scss']
})
export class ImportJsonComponent {
  jsonData: any = null;
  free_runes: SwRune[];
  all_runes: Rune[];

  constructor(private store: Store) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      const file: File = input.files[0];

      // Vérifier si c'est un fichier JSON
      if (file.type === 'application/json') {
        const reader = new FileReader();

        // Lire le contenu du fichier
        reader.onload = (e: any) => {
          try {
            this.jsonData = JSON.parse(e.target.result);
            this.free_runes = this.jsonData["runes"];
            this.all_runes = [...this.free_runes, ...this.getEquippedRunes(this.jsonData["unit_list"])].map((rune: SwRune) => {
              return {
                id: rune.rune_id,
                equipped_monster_id: rune.occupied_id,
                slot_no: rune.slot_no,
                stars: rune.class,
                set: {
                  id: rune.set_id,
                  label: runeSets[rune.set_id]
                },
                main_stat: {
                  id: rune.pri_eff[0],
                  label: statEffect[rune.pri_eff[0]],
                  value: rune.pri_eff[1]
                },
                prefix_stat: {
                  id: rune.pri_eff[0],
                  label: statEffect[rune.pri_eff[0]],
                  value: rune.pri_eff[1]
                },
                secondary_stats: rune.sec_eff.map(stat => {
                  return {
                    id: stat[0],
                    label: statEffect[stat[0]],
                    value: stat[1]
                  }
                })
                ,
                base_rarity: 'common',
                current_uprade: 0
              }
            });

            this.store.dispatch(RuneActions.load({runes: this.all_runes}));
          } catch (error) {
            console.error('Erreur de parsing du JSON:', error);
          }
        };

        reader.readAsText(file);
      } else {
        console.error('Le fichier sélectionné n\'est pas un fichier JSON.');
      }
    }
  }

  // Returns an array with all the runes equipped on monsters
  getEquippedRunes(unit_list: any) {
    let runes = [];
    unit_list.forEach(unit => {
      if (unit.runes.length > 0) {
        unit.runes.forEach(rune => {
          runes.push(rune)
        })
      }
    });

    return runes;
  }
}
