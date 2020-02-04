import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Revisar estos dos ejemplos para empezar
// https://stackblitz.com/edit/dynamic-components-angular?file=app%2Fmodal.component.ts
// https://stackblitz.com/edit/dynamic-component