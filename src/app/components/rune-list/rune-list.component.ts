import { Component, Input } from '@angular/core';
import { Rune } from 'src/app/models/rune';
import { RuneComponent } from '../rune/rune.component';

@Component({
  selector: 'app-rune-list',
  standalone: true,
  imports: [RuneComponent],
  templateUrl: './rune-list.component.html',
  styleUrl: './rune-list.component.scss'
})
export class RuneListComponent {
  @Input() runes: ReadonlyArray<Rune> = []
}
