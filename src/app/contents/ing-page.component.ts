
import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { IngParser, TransactionType } from "../ing-parser";

import * as _ from 'lodash';
import { Data, MonthDate } from "../data";
import { ApiCommService } from '../api-comm.service';

@Component({
    selector: 'ing-page',
    templateUrl: 'ing-page.html'
})

export class IngPageComponent
    implements OnInit {

    constructor(private _apiComm: ApiCommService) { }

    // console.log(_.uniq(_.map(textItems, (i) => {return i.transactionText;})));
    ngOnInit() {
        this.newFileLoaded.subscribe((text) => {
            let textItems = IngParser.parseText(text);
            let objItems = IngParser.parseItems(textItems);

            this.lastLoadedItems = objItems;

            //this shows it on the page
            // let jsonStr = JSON.stringify(objItems, null, "\t");
            // let cont = document.getElementById("content");
            // cont.innerText = jsonStr;            
        })
    }

    public lastLoadedItems;

    public uploadToPerson(person: string) {
        //"sabrina"/"vaclav"            

        let res = {
            person: person,
            items: this.lastLoadedItems
        };

        this._apiComm.apiPostAsync("real-expenses", res);
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