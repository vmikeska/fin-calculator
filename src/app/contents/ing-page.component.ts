
import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { IngParser, TransactionType } from "../ing-parser";

import * as _ from 'lodash';
import { Data, MonthDate } from "../data";

@Component({
    selector: 'ing-page',
    templateUrl: 'ing-page.html'
})

export class IngPageComponent
    implements OnInit {

    constructor() { }

    ngOnInit() {
        this.newFileLoaded.subscribe((text) => {
            let textItems = IngParser.parseText(text);
            let objItems = IngParser.parseItems(textItems);

            console.log(_.uniq(_.map(textItems, (i) => {return i.transactionText;})));

            console.log(JSON.stringify(objItems));

            // let vaclavData = { data: [], label: 'Vaclav Expenses' }


            // let from: MonthDate = { month: 8, year: 2016 };
            // let to: MonthDate = { month: 9, year: 2019 };

            // let vgs = IngParser.getMonthsResults(Data.vaclavTransactions, from, to);
            // vgs.forEach((vg) => {

            //     let expenses = _.filter(vg.items, (i) => { return [TransactionType.ExpenseAccount, TransactionType.ExpenseCard].includes(i.transactionType); })
            //     let totalAmount = _.sumBy(vg.items, "amount");
            //     vaclavData.data.push(totalAmount);
            // })



            // console.log(JSON.stringify(vaclavData));

        })
    }

    public newFileLoaded = new Subject<string>();

    private readSingleFile(evt) {
        var f = evt.target.files[0];

        if (f) {
            var r = new FileReader();
            r.onload = (e) => {
                var contents = e.target["result"];

                this.newFileLoaded.next(contents);
                //console.log(contents)
            }
            r.readAsText(f);
        } else {
            alert("Failed to load file");
        }
    }


}