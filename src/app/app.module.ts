import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaintFieldModule } from './views/paint-field/paint-field.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaintFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
