import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { InflowService } from '../services/inflow.service';
import { AppService } from '../services/app.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-inflow-form',
  templateUrl: './inflow-form.component.html',
  styleUrls: ['./inflow-form.component.scss']
})
export class InflowFormComponent implements OnInit {
  constructor(private inflowService: InflowService, private appService: AppService, private datePipe: DatePipe) { }

  inflowForm;
  mpOptions:string[]=[ 'DE',	'AU',	'NA',	'IT',	'UK',	'AE',	'ES',	'FR',	'IN',	'JP',	'MX',	'SG',	'NL',	'TR',	'CN',	'SA',	'BR'];
  nodeOptions:string[]=[ 'GDN',	'BLR',	'IAS',	'AMM',	'PEK',	'SJO',	'SZX',	'LUX',	'MUC',	'AMS',	'SEA',	'BNA',	'SHA',	'HND',	'DXB',	'LTN',	'GRU',	'CVG',	'LHR',	'SYD',	'CDG',	'SIN',	'LIN',	'MEX',	'MAD'];
  ers=[1,2,3,4,5,6,7,8,9,10];
  crs=[1,2,3,4,5,6,7,8,9,10];
  asinreviewpriority=[1,2,3,4];
  //filteredOptions: Observable<string[]>;
  filteredOptionsMP:Observable<string[]>;  
  filteredOptionsNode:Observable<string[]>;  
  ngOnInit() {
    this.inflowForm = new FormGroup({
      asincatchdatefrom: new FormControl(new Date()),
      asincatchdateto: new FormControl(new Date()),
      "inflowyw": new FormControl(),
      "inflowym": new FormControl(),
      "Class": new FormControl(),
      "workingstatus": new FormControl(),
      "asinreviewpriority": new FormControl(),
      "productcategory": new FormControl(),
      "policytype": new FormControl(),
      "enforcementriskscore": new FormControl(),
      "csbriskscore": new FormControl(),
      "policyentityid": new FormControl(),
      "marketplace": new FormControl(),
      "node":new FormControl()
    });


    this.filteredOptionsMP=this.inflowForm.get("marketplace").valueChanges
    .pipe(
      startWith(''),
      map((value:string) => this._filterMP(value)
      )
      );
    this.filteredOptionsNode=this.inflowForm.get("node").valueChanges
    .pipe(
      startWith(''),
      map((value:string) => this._filterNode(value))
      );
    this.inflowForm.valueChanges.subscribe(obj => {
      let lastid = this.appService.selectedId;
      if (this.appService.selectedId != undefined) {
        let control = obj[this.appService.selectedId];
        if (control.length) {
          this.inflowService.inflowAutoComplete(control).subscribe((elm: string[]) => {
            if (this.appService.selectedId === lastid) {
              this.appService.filteredOptions = of(elm);
              console.log('service Response -->', elm);
            }
          });
      }
    }
    }
    );
  }

  private _filterMP(value: string): string[] {
    const filterValue1 = value.toLowerCase();
    console.log(this.mpOptions.filter(option => option.toLowerCase().includes(filterValue1)));
    return this.mpOptions.filter(option => option.toLowerCase().includes(filterValue1));
  }
  private _filterNode(value: string): string[] {
    const filterValue2 = value.toLowerCase();
    console.log(this.nodeOptions.filter(option => option.toLowerCase().includes(filterValue2)));
    return this.nodeOptions.filter(option => option.toLowerCase().includes(filterValue2));
  }

callInflowFilterService(model:any){
  this.inflowService.inflowFormSubmit(model).subscribe((response: any)=>{
    //console.log(response);
    if(response!=null && response!=undefined && response.length>0){
      this.inflowService.downloadFile(response,"dataInflow",Object.keys(response[0]));
    }
    else{
      alert('Data not available for filtered options');
    }
  },error => alert(error));
}
  onSubmit() {
    //alert(JSON.stringify(this.inflowForm.value));
    var objSubmit=
    {
      "asin_catch_date_from":{},
      "asin_catch_date_to":{},
      "inflow_yw":[],
       "inflow_ym":[],
       "Class":[],
       "working_status":[],
       "asin_review_priority":[],
       "product_category":[],
       "policy_type":[],
       "enforcement_risk_score":[],
       "csb_risk_score":[],
       "policy_entity_id":[],
       "marketplace":[],
       "node":[]
    }
    
    if(this.inflowForm.value.asincatchdatefrom!=undefined && this.inflowForm.value.asincatchdatefrom!=null)
     objSubmit.asin_catch_date_from=this.datePipe.transform(this.inflowForm.value.asincatchdatefrom,"MM/dd/yyyy");
    if(this.inflowForm.value.asincatchdateto!=undefined && this.inflowForm.value.asincatchdateto!=null)
    objSubmit.asin_catch_date_to=this.datePipe.transform(this.inflowForm.value.asincatchdateto,'MM/dd/yyyy');
    if(this.inflowForm.value.inflowyw!=undefined && this.inflowForm.value.inflowyw!=null)
    objSubmit.inflow_yw.push(this.inflowForm.value.inflowyw);
    if(this.inflowForm.value.inflowym!=undefined && this.inflowForm.value.inflowym!=null)
    objSubmit.inflow_ym.push(this.inflowForm.value.inflowym);
    if(this.inflowForm.value.Class!=undefined && this.inflowForm.value.Class!=null)
    objSubmit.Class.push(this.inflowForm.value.Class);
    if(this.inflowForm.value.workingstatus!=undefined && this.inflowForm.value.workingstatus!=null && this.inflowForm.value.workingstatus!="")
    objSubmit.working_status.push(this.inflowForm.value.workingstatus);
    if(this.inflowForm.value.asinreviewpriority!=undefined && this.inflowForm.value.asinreviewpriority!=null)
    objSubmit.asin_review_priority.push(this.inflowForm.value.asinreviewpriority);
    if(this.inflowForm.value.productcategory!=undefined && this.inflowForm.value.productcategory!=null)
    objSubmit.product_category.push(this.inflowForm.value.productcategory);
    if(this.inflowForm.value.policytype!=undefined && this.inflowForm.value.policytype!=null)
    objSubmit.policy_type.push(this.inflowForm.value.policytype);
    if(this.inflowForm.value.policyentityid!=undefined && this.inflowForm.value.policyentityid!=null)
    objSubmit.policy_entity_id.push(this.inflowForm.value.policyentityid);
    if(this.inflowForm.value.enforcementriskscore!=undefined && this.inflowForm.value.enforcementriskscore!=null)
    objSubmit.enforcement_risk_score.push(this.inflowForm.value.enforcementriskscore);
    if(this.inflowForm.value.csbriskscore!=undefined && this.inflowForm.value.csbriskscore!=null)
    objSubmit.csb_risk_score.push(this.inflowForm.value.csbriskscore);
    if(this.inflowForm.value.marketplace!=undefined && this.inflowForm.value.marketplace!=null)
    objSubmit.marketplace.push(this.inflowForm.value.marketplace);
    if(this.inflowForm.value.node!=undefined && this.inflowForm.value.node!=null)
    objSubmit.node.push(this.inflowForm.value.node);
    //console.log(objSubmit);
    this.callInflowFilterService(objSubmit);
  }
}
