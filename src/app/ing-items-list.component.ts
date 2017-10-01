import { Component, OnInit, Input } from '@angular/core';
import { IngItem } from "./ing-parser";

import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
    selector: 'ing-items-list',
    templateUrl: 'ing-items-list.html'
})

export class IngItemsListComponent
    implements OnInit {

    constructor() { }

    mom = moment;

    public itemsInternal : IngItem[];

    @Input()
    public set items(items: IngItem[]) {
        let is = _.orderBy(items, "amount").reverse();
        this.itemsInternal = is;        
    }

    public get items() {
        return this.itemsInternal;
    }

    ngOnInit() { }


}