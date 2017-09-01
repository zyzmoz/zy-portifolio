import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TRANSLATION_PROVIDER, TranslatePipe, TranslateService } from './translate';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [TRANSLATION_PROVIDER, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
