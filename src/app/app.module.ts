import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportJsonComponent } from './components/import-json/import-json.component';
import { StoreModule } from '@ngrx/store';
import { runeReducer } from './state/rune.reducer';
import { collectionReducer } from './state/collection.reducer';
import { RuneListComponent } from "./components/rune-list/rune-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ImportJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ runes: runeReducer, collection: collectionReducer }),
    RuneListComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
