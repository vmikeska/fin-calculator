
import { Injectable } from '@angular/core';
import { ApiCommService } from './api-comm.service';

@Injectable()
export class FilterCategoryService {

    constructor(private _apiComm: ApiCommService) { }

    private api = "category-filtering";


    public async postAsync(item: FilterRule) {        
        await this._apiComm.apiPostAsync(this.api, item);     
    }

    public async deleteAsync(id) {        
        await this._apiComm.apiDeleteAsync(this.api, {id: id});     
    }

    public async getAllAsync() {
        let items = await this._apiComm.apiGetAsync<FilterRule[]>(this.api);             
        return items;
    }

    
}

export class FilterRule {
    public _id?;
    public categoryId: string;
    public propName: string;
    public value: string;
}