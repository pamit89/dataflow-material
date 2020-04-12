import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Injectable({ providedIn: "root" })
export class InflowService {
    constructor(private http: HttpClient, private appService: AppService) { }
    inflowAutoComplete(value) {
        return this.http.get('http://3.21.53.117:8080/api/GetFilterValues/getfiltervalueinfow', { params: { filterValues: this.appService.selectedElm, inptTxt: value } });
    }
    inflowFormSubmit(inflowListModel:any){
        return this.http.post('http://localhost:5000/api/Inflow/inflowdata', inflowListModel);
    }
    downloadFile(data, filename='data',headersList) {
        let csvData = this.ConvertToCSV(data, headersList);
        console.log(csvData)
        let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }

    ConvertToCSV(objArray, headerList) {
         let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
         let str = '';
         let row = 'S.No,';

         for (let index in headerList) {
             row += headerList[index] + ',';
         }
         row = row.slice(0, -1);
         str += row + '\r\n';
         for (let i = 0; i < array.length; i++) {
             let line = (i+1)+'';
             for (let index in headerList) {
                let head = headerList[index];

                 line += ',' + array[i][head];
             }
             str += line + '\r\n';
         }
         return str;
     }
}