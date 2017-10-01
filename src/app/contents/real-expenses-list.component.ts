
import { Component, OnInit } from '@angular/core';
import { IngParser, TransactionType, IngItem } from "../ing-parser";
import { MonthDate, Data } from "../data";

import * as _ from 'lodash';
import * as moment from 'moment';
import { DataS } from "../dataSabrina";
import { DataV } from "../dataVaclav";
import { RealExpensesCalculator, ExpensesGrouper, CategoryGroupedItems } from "../RealExpensesCalculator";

@Component({
    selector: 'real-expenses-list',
    templateUrl: 'real-expenses-list.html'
})

export class RealExpensesListComponent implements OnInit {
    constructor() { }

    public monthGroups: GroupedItems[] = [];

    public included: IngItem[];
    

    public includeSabrina = true;
    public includeVaclav = true;

    ngOnInit() {

        this.refreshData();

    }

    private refreshData() {

        let from: MonthDate = { month: 9, year: 2016 };
        let to: MonthDate = { month: 8, year: 2017 };

        let res = RealExpensesCalculator.aggregate(from, to, this.includeSabrina, this.includeVaclav);

        this.monthGroups = res.monthGroups;
        this.spentTotal = res.spentTotal;
        this.spentAvg = res.spentAvg;
    }



    public spentTotal: number;
    public spentAvg: number;
    public leftoversTotal: number;

    public expenseGroups: CategoryGroupedItems[] = [];

    public groupedItemsDetial: IngItem[];



    public filterChagned() {
        this.refreshData();
    }

    public setActive(g: GroupedItems) {

        let cats = new ExpensesGrouper(g.included);
        cats.group();

        let cts = _.sortBy(cats.cats, "total").reverse();

        this.expenseGroups = cts;

        this.leftoversTotal = Math.floor(_.sumBy(cats.uncategoriezed, "amount"));

        this.included = cats.uncategoriezed;
         
        return false;
    }

    public showActiveGroupedItems(cat: CategoryGroupedItems) {
        this.groupedItemsDetial = cat.items;

        return false;
    }

}

export class GroupedItems {
    date: MonthDate;
    included: IngItem[];
    excluded: IngItem[];
    totalAmount: number;
}