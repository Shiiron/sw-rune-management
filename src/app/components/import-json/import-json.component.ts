import { Component } from '@angular/core';

@Component({
  selector: 'app-import-json',
  templateUrl: './import-json.component.html',
  styleUrls: ['./import-json.component.scss']
})
export class ImportJsonComponent {

  jsonData: any = null;
  free_runes: any;
  equipped_runes: any;
  all_runes: any;

  // Méthode déclenchée lorsque l'utilisateur sélectionne un fichier
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
            this.equipped_runes = this.getEquippedRunes(this.jsonData["unit_list"]);
            this.all_runes = [...this.free_runes, ...this.equipped_runes];
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
