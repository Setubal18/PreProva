import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastrarNoticiaComponent } from './cadastrar-noticia/cadastrar-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarNoticiaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
