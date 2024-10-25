import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectRunes } from './state/rune.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rune-management';
  runes$ = this.store.select(selectRunes);

  constructor(private store: Store){}
}
