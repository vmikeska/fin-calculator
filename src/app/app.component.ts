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
    this.fillDataForPieChart();
  }

  constructor() {
    
  }

  
  public tabs: TabItem[] = [
    { id: "tiExpensesList", name: "Expenses list" },
    { id: "tiShareStatistics", name: "Share statistics" },    
  ];

  private fillDataForPieChart() {
    let from: MonthDate = { month: 11, year: 2017 };
    let to: MonthDate = { month: 11, year: 2017 };

    let results = Operations.getMonthsResults(from, to);
    let result = results[0];

    let expensesGroup = Operations.groupByCategories(Data.expenses);
    expensesGroup.forEach((eg) => {
      this.pieChartLabels.push(eg.category.name);
      this.pieChartData.push(eg.total);
    })

  }


  // Pie
  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];

  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


}







