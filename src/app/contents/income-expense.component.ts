
import { Component, OnInit } from '@angular/core';
import { MonthDate } from "../data";
import { Operations } from "../operations";

import * as _ from 'lodash';

@Component({
    selector: 'income-expense',
    templateUrl: 'income-expense.html'
})

export class IncomeExpenseComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        let from: MonthDate = { month: 9, year: 2017 };
        let to: MonthDate = { month: 9, year: 2019 };

        let results = Operations.getMonthsResults(from, to);
        
        this.lineChartLabels = _.map(results, (r) => { return `${r.date.month}/${r.date.year}`})

        let expensesData = { data: [], label: 'Expenses' }

        results.forEach((result) => {
            let total = Operations.getPriceFromItems(result.items);
            expensesData.data.push(total);
        })

        this.lineChartData = [expensesData]
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
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
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