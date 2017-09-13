
import { Component, OnInit } from '@angular/core';
import { CategoryGroup, MonthDate, ExpenseItem, Data } from "../data";
import { Operations } from "../operations";

import * as _ from 'lodash';

@Component({
    selector: 'items-administration',
    templateUrl: 'items-administration.html'
})

export class ItemsAdministrationComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        let from: MonthDate = { month: 11, year: 2017 };
        let to: MonthDate = { month: 11, year: 2018 };
    
        let results = Operations.getMonthsResults(from, to);
    
        let firstResult = results[0];
    
        this.expensesGroups = Operations.groupByCategories(Data.expenses);
        // this.expensesGroups = this.groupByCategories(firstResult.items);
        this.totalMonth = _.sumBy(firstResult.items, "amount");
    
        let price = Operations.getPriceFromItems(firstResult.items);    
    
        
    
        // console.log(results);
      }

    public expensesGroups: CategoryGroup[];
    public totalMonth: number;

    public expensesListItemSelectionChanged(e, item: ExpenseItem) {
        item.excluded = !e.target.checked;
     }
}