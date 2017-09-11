import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from "ng2-charts";
import { ItemsAdministrationComponent } from "./contents/items-administration.component";
import { TabsComponent } from "./tabs.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemsAdministrationComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule, ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
