import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from "ng2-charts";
import { ItemsAdministrationComponent } from "./contents/items-administration.component";
import { TabsComponent } from "./tabs.component";
import { ShareStatisticsComponent } from "./contents/share-statistics.component";
import { IncomeExpenseComponent } from "./contents/income-expense.component";
import { IngPageComponent } from "./contents/ing-page.component";
import { RealExpensesListComponent } from "./contents/real-expenses-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemsAdministrationComponent,
    TabsComponent,
    ShareStatisticsComponent,
    IncomeExpenseComponent,
    IngPageComponent,
    RealExpensesListComponent
  ],
  imports: [
    BrowserModule, ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
