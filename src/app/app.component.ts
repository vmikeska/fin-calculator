import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import * as _ from 'lodash';
import { MonthDate, ExpenseItem, CategoryGroup, MonthlyGroupedExpenses, Data } from "./data";
import { Operations } from "./operations";
import { TabItem } from "./tabs.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './scss/style.scss',
    './scss/tabs.scss'
  ]
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    
  }

  constructor() {
    
  }

  
  public tabs: TabItem[] = [
    { id: "tiRealExpenses", name: "Real Expenses" },
    { id: "tiExpensesList", name: "Expenses list" },
    { id: "tiShareStatistics", name: "Share statistics" },    
    { id: "tiIncomeExpense", name: "Income expense" },    
    
    { id: "tiIngPage", name: "Ing" },    
    
  ];

  

}







