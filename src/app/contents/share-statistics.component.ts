

import { Component, OnInit } from '@angular/core';
import { MonthDate, Data } from "../data";
import { Operations } from "../operations";

@Component({
    selector: 'share-statistics',
    templateUrl: 'share-statistics.html'
})

export class ShareStatisticsComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        this.fillDataForPieChart();
        this.createImportantUnimporant();
    }

    public pieChartLabels: string[] = [];
    public pieChartData: number[] = [];

    public pieChartType: string = 'pie';

    public importantData: number[];
    public importantLabels: string[];

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

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

    private createImportantUnimporant() {
        let from: MonthDate = { month: 11, year: 2017 };
        let to: MonthDate = { month: 11, year: 2017 };

        let results = Operations.getMonthsResults(from, to);
        let result = results[0];

        let cats = Operations.splitImportant(result.items);

        let importantPrice = Operations.getPriceFromItems(cats.important);
        let unimportantPrice = Operations.getPriceFromItems(cats.unimportant);

        this.importantLabels = ["important", "unimportant"];
        this.importantData = [importantPrice, unimportantPrice];
    }
}