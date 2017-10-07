
import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { IngParser, TransactionType, IngItem } from "../ing-parser";

import * as _ from 'lodash';
import { Data, MonthDate } from "../data";
import { ExpensesDataService } from '../expenses-data.service';

@Component({
    selector: 'ing-page',
    templateUrl: 'ing-page.html'
})

export class IngPageComponent
    implements OnInit {

    constructor(private _expensesDataSvc: ExpensesDataService) { }

    // console.log(_.uniq(_.map(textItems, (i) => {return i.transactionText;})));
    ngOnInit() {
        this.newFileLoaded.subscribe((text) => {

            let textItems = IngParser.parseText(text);
            let parsedItems = IngParser.parseItems(textItems, this.selectedPersonId);

            let validatedItems = _.filter(parsedItems, (i) => {
                if (!i.account) {
                    return false;
                }

                return true;
            })

            this.syncItems(validatedItems, this.selectedPersonId);
        })
    }

    private async syncItems(newItems: IngItem[], personId: number) {
        let oldItems = await this._expensesDataSvc.getAllAsync();
        let oldItemsPerson = _.filter(oldItems, { personId: personId });

        if (oldItemsPerson.length === 0) {
            this._expensesDataSvc.postAsync(newItems);
        } else {            
            let lastOldDataItem = _.maxBy(oldItemsPerson, "paidDate");
            let lastOldDate = lastOldDataItem.paidDate;
            let dateToTakeDataToCompare = lastOldDate.clone().add(-10, "days");

            let newItemsToCompare = _.filter(newItems, (newItem) => {
                let qualifiedToCompare = newItem.paidDate.isAfter(dateToTakeDataToCompare);
                return qualifiedToCompare;
            })

            let newItemsToSave = _.filter(newItemsToCompare, (i) => {

                let foundItem = _.find(oldItemsPerson, { usage: i.usage, account: i.account });
                if (foundItem) {
                    return false;
                }

                return true;
            });

            console.log(newItemsToSave);

            console.log("last old")
            console.log(lastOldDataItem);

            let firstNew = _.minBy(newItemsToSave, "paidDate");

            console.log("first new")
            console.log(firstNew);

            this._expensesDataSvc.postAsync(newItemsToSave);
        }
    }

    public selectedPersonId = null;

    public selectPerson(personId) {
        this.selectedPersonId = personId;
        //sabrina = 1
        //vaclav = 2
    }

    public newFileLoaded = new Subject<string>();

    public readSingleFile(evt) {
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