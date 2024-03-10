import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntestazioneComponent } from './intestazione/intestazione.component';
import { ListaVideoComponent } from './lista-video/lista-video.component';

@NgModule({
  declarations: [
    AppComponent,
    IntestazioneComponent,
    ListaVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
