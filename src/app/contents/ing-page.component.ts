
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

            // console.log(_.uniq(_.map(textItems, (i) => {return i.transactionText;})));

            let jsonStr = JSON.stringify(objItems, null, "\t");

            let cont = document.getElementById("content");
            cont.innerText = jsonStr;
            
            // console.log(jsonStr);
        })
    }

    // private stringify(obj_from_json){
    //     if(typeof obj_from_json !== "object" || Array.isArray(obj_from_json)){
    //         // not an object, stringify using native function
    //         return JSON.stringify(obj_from_json, null, "\t");
    //     }
    //     // Implements recursive object serialization according to JSON spec
    //     // but without quotes around the keys.
    //     let props = Object
    //         .keys(obj_from_json)
    //         .map(key => `${key}:${this.stringify(obj_from_json[key])}`)
    //         .join(",");
    //     return `{${props}}`;
    // }

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