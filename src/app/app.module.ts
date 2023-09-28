import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApplyNumericDisplayConfigPipe } from './Components/pipe/apply-numeric-display-config.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ApplyNumericDisplayConfigPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
