import { Injectable } from '@angular/core';
import { ApiCommService } from './api-comm.service';
import { IngItem } from './ing-parser';

import * as moment from "moment";
import * as _ from 'lodash';

@Injectable()
export class ExpensesDataService {

    constructor(private _apiComm: ApiCommService) { }

    public async postAsync(items) {
        items.forEach((i) => {
            i.accountedDate = i.accountedDate.format("DD.MM.YYYY");
            i.paidDate = i.paidDate.format("DD.MM.YYYY");
        })
        await this._apiComm.apiPostAsync("real-expenses", items);     
    }

    public async getAllAsync() {
        let items = await this._apiComm.apiGetAsync<IngItem[]>("real-expenses");     
        items.forEach((i) => {
            this.freshItem(i)
        })
        return items;
    }


    private freshItem(item: IngItem) {
        item.accountedDate = moment(item.accountedDate, "DD.MM.YYYY");
        item.paidDate = moment(item.paidDate, "DD.MM.YYYY");        
    }
}