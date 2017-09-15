
import { Component, OnInit } from '@angular/core';
import { MonthDate, Data } from "../data";
import { Operations } from "../operations";

import * as _ from 'lodash';
import { IngParser, TransactionType, IngItem } from "../ing-parser";
import { DataS } from "../dataSabrina";
import { DataV } from "../dataVaclav";
import { RealExpensesCalculator } from "../RealExpensesCalculator";

@Component({
    selector: 'income-expense',
    templateUrl: 'income-expense.html'
})

export class IncomeExpenseComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        let from: MonthDate = { month: 8, year: 2016 };
        let to: MonthDate = { month: 9, year: 2019 };

        let results = Operations.getMonthsResults(from, to);

        //labels
        this.lineChartLabels = _.map(results, (r) => { return `${r.date.month}/${r.date.year}` })

        //expenses
        let expensesData = { data: [], label: 'Estimated Expenses' }

        results.forEach((result) => {
            let total = Operations.getPriceFromItems(result.items);
            expensesData.data.push(total);
        })


        //income
        let incomesData = { data: [], label: 'Estimated Incomes' }

        let incomeResults = Operations.getMonthsIncomeResults(from, to);
        incomeResults.forEach((incomeResult) => {
            let totalAmount = _.sumBy(incomeResult.items, "amount");
            incomesData.data.push(totalAmount);
        })

     
        let realRes = RealExpensesCalculator.aggregate(from, to, true, true);

        let realData = { data: [], label: 'Real Expenses (V+S)' };

        realData.data = _.map(realRes.monthGroups, (i) => { return i.totalAmount });

        this.lineChartData = [expensesData, incomesData, realData];
    }


    public lineChartData: Array<any> = [];
    public lineChartLabels: Array<any> = [];

    // public lineChartData: Array<any> = [
    //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    //     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    //     { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    // ];
    // public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    public lineChartOptions: any = {
        responsive: true
    };

    public lineChartColors: Array<any> = [
        { //expenses
            backgroundColor: 'rgba(215, 44, 44,0.2)',
            borderColor: 'red',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { //income
            backgroundColor: 'rgba(0, 255, 0,0.2)',
            borderColor: 'green',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // real expenses
            backgroundColor: 'rgba((45, 141, 251,0.2)',
            borderColor: 'blue',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';


    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}