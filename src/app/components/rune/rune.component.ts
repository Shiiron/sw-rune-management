import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rune } from 'src/app/models/rune';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-rune',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './rune.component.html',
  styleUrl: './rune.component.scss'
})
export class RuneComponent {
  @Input() rune: Rune;
  @Output() addToSell = new EventEmitter()
  @Output() removeToSell = new EventEmitter()
}
