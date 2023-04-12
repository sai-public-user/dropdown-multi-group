import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { OptionItemComponent } from './option-item/option-item.component';
import { GroupItemComponent } from './group-item/group-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSelectComponent,
    OptionItemComponent,
    GroupItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CustomSelectComponent,
    OptionItemComponent,
    GroupItemComponent
  ]
})
export class AppModule { }
