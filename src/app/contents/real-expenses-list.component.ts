
import { Component, OnInit } from '@angular/core';
import { IngParser, TransactionType, IngItem } from "../ing-parser";
import { MonthDate, Data } from "../data";

import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
    selector: 'real-expenses-list',
    templateUrl: 'real-expenses-list.html'
})

export class RealExpensesListComponent implements OnInit {
    constructor() { }

    mom = moment;

    public monthGroups: GroupedItems[] = [];

    public included: IngItem[];
    public excluded: IngItem[];

    ngOnInit() { 

        let from: MonthDate = { month: 9, year: 2016 };
        let to: MonthDate = { month: 8, year: 2017 };

        let f = [];
        f = f.concat(Data.sabrinaTransactions);
        f = f.concat(Data.vaclavTransactions);
        let vts = <IngItem[]>f;

        let vgs = IngParser.getMonthsResults(vts, from, to);
        vgs.forEach((vg) => {

            let expenses = _.filter(vg.items, (i) => {
                let transTypeOk = [TransactionType.ExpenseAccount, TransactionType.ExpenseCard].includes(i.transactionType);                
                return transTypeOk;
            });

            let included: IngItem[] = [];
            let excluded: IngItem[] = [];

            expenses.forEach((expense) => {
                let isGood = true;

                let innerTransaction =  ["Sabrina Goersch", "Vaclav Mikeska", "Sabrina Mikeska"].includes(expense.account);
                if (innerTransaction) {
                    isGood = false;
                }

                if (isGood) {
                    included.push(expense);
                } else {
                    excluded.push(expense);
                }
            });

            let totalAmount = Math.round(Math.abs(_.sumBy(included, "amount")));

            let g: GroupedItems = {
                date: vg.date,
                excluded: excluded,
                included: included,
                totalAmount: totalAmount
            };
            
            this.monthGroups.push(g);
            
        });

    }

    public setActive(g: GroupedItems) {
        this.excluded = _.sortBy(g.excluded, "amount");
        this.included = _.sortBy(g.included, "amount");
    }

}

export class GroupedItems {
    date: MonthDate;
    included: IngItem[];
    excluded: IngItem[];
    totalAmount: number;
}