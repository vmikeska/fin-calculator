
import { Injectable } from "@angular/core";

import { Http, Headers, RequestOptionsArgs, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiCommService {


    constructor(private _http: Http) {

    }

    private apiRoot = "http://localhost:3000/api/";
  
    public async apiGetBaseAsync(endpoint: string, json = null) {
        var opts: RequestOptionsArgs = {
            withCredentials: true
        }

        let urlBase = this.getApiUrl(endpoint);
        let data = json ? this.convertJsonToUrlParams(json) : null;

        let url = data ? `${urlBase}?${data}` : urlBase;


        let resPromise =
            await this._http.get(url, opts).toPromise()
                .catch((error) => {
                    //todo: show error dialog
                    throw new Error(`Error while GET on '${url}'`);
                });

        return resPromise;
    }

    public async apiPostBaseAsync(endpoint: string, json: any) {
        let url = this.getApiUrl(endpoint);
        let data = json;

        let resPromise = this._http.post(url, data).toPromise();

        return resPromise;
    }

    public async apiPutBaseAsync(endpoint: string, json: any, customErrors = false) {
        let url = this.getApiUrl(endpoint);
        let data = json ? this.convertJsonToUrlParams(json) : null;

        let headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" });
        let opts = { headers: headers, withCredentials: true };

        let resPromise = this._http.put(url, data, opts).toPromise();

        if (!customErrors) {
            resPromise.catch((error) => {
                //todo: show error dialog                                    
                throw new Error(`Error while PUT on '${url}'`);
            });
        }

        return resPromise;
    }

    public async apiDeleteBaseAsync(endpoint: string, json = null, customErrors = false) {
        var opts: RequestOptionsArgs = {
            withCredentials: true
        }

        let urlBase = this.getApiUrl(endpoint);
        let data = json ? this.convertJsonToUrlParams(json) : null;

        let url = data ? `${urlBase}&${data}` : urlBase;

        let resPromise = this._http.delete(url, opts).toPromise();

        if (!customErrors) {
            resPromise.catch((error) => {
                //todo: show error dialog                                    
                throw new Error(`Error while GET on '${url}'`);
            });
        }

        return resPromise;
    }


    public async apiGetAsync<T>(endpoint: string, data = null): Promise<T> {

        let p = await this.apiGetBaseAsync(endpoint, data)

        let res = p.json();

        return <T>res;
    }

    public async apiPostAsync<T>(endpoint: string, data: any) {

        let p = await this.apiPostBaseAsync(endpoint, data);

    }

    public async apiPutAsync<T>(endpoint: string, data: any = null, customErrors = false, respType = ResponseType.JSON) {

        let p = await this.apiPutBaseAsync(endpoint, data, customErrors);

        // let res = null;
        // if (respType === ResponseType.JSON) {
        //     res = p.json();
        // }
        // if (respType === ResponseType.TXT) {
        //     res = p.text();
        // }

        // return <T>res;
    }

    public async apiDeleteAsync<T>(endpoint: string, data = null, customErrors = false, respType = ResponseType.JSON) {

        let p = await this.apiDeleteBaseAsync(endpoint, data)

        // let res = null;
        // if (respType === ResponseType.JSON) {
        //     res = p.json();
        // }
        // if (respType === ResponseType.TXT) {
        //     res = p.text();
        // }

        // return <T>res;
    }

    public getApiUrl(endpoint) {
        let url = `${this.apiRoot}${endpoint}`;
        return url;
    }

    private convertJsonToUrlParams(json) {

        let up = new URLSearchParams();

        for (let name in json) {
            if (json.hasOwnProperty(name)) {
                let prop = json[name];
                up.append(name, prop);
            }
        }

        let body = up.toString()
        return body;
    }

}

export enum ResponseType { JSON, TXT }

class Exceptions {
    public static ShowError(techError: string = "") {

    }
}
