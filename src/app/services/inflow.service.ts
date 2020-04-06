import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AppService } from '../inflow-form/app.service';

@Injectable({ providedIn: "root" })
export class InflowService {
    constructor(private http: HttpClient, private appService: AppService) { }
    inflowAutoComplete(value) {
        return this.http.get('http://3.21.53.117:8080/api/GetFilterValues/getfiltervalueinfow', { params: { filterValues: this.appService.selectedElm, inptTxt: value } });
    }
}