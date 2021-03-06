import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ChartsModule } from "ng2-charts";
import { ItemsAdministrationComponent } from "./contents/items-administration.component";
import { TabsComponent } from "./tabs.component";
import { ShareStatisticsComponent } from "./contents/share-statistics.component";
import { IncomeExpenseComponent } from "./contents/income-expense.component";
import { IngPageComponent } from "./contents/ing-page.component";
import { RealExpensesListComponent } from "./contents/real-expenses-list.component";

import { FormsModule } from '@angular/forms';
import { IngItemsListComponent } from "./ing-items-list.component";

import { RealExpensesCalculatorService } from './real-expenses-calculator.service';
import { ApiCommService } from './endpoints/api-comm.service';
import { ExpensesDataService } from './endpoints/expenses-data.service';
import { FilterCategoryService } from './endpoints/filter-category.service';
import { ReSettingsComponent } from './contents/re-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsAdministrationComponent,
    TabsComponent,
    ShareStatisticsComponent,
    IncomeExpenseComponent,
    IngPageComponent,
    RealExpensesListComponent,
    IngItemsListComponent,
    ReSettingsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ChartsModule, HttpModule
  ],
  providers: [ApiCommService, ExpensesDataService, RealExpensesCalculatorService, FilterCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
