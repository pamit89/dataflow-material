import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { OutflowService } from '../services/outflow.service';
import { AppService } from '../services/app.service';
import { startWith, map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-outflow-form',
  templateUrl: './outflow-form.component.html',
  styleUrls: ['./outflow-form.component.scss']
})
export class OutflowFormComponent implements OnInit {

  constructor(private outflowService: OutflowService, private appService: AppService, private datePipe: DatePipe) { }
  outflowForm;
  filteredOptionsOutflow: Observable<string[]>;
  filteredOptionsMP:Observable<string[]>;  
  filteredOptionsNode:Observable<string[]>;  
  mpOptions:string[]=[ 'DE',	'AU',	'NA',	'IT',	'UK',	'AE',	'ES',	'FR',	'IN',	'JP',	'MX',	'SG',	'NL',	'TR',	'CN',	'SA',	'BR'];
  nodeOptions:string[]=[ 'GDN',	'BLR',	'IAS',	'AMM',	'PEK',	'SJO',	'SZX',	'LUX',	'MUC',	'AMS',	'SEA',	'BNA',	'SHA',	'HND',	'DXB',	'LTN',	'GRU',	'CVG',	'LHR',	'SYD',	'CDG',	'SIN',	'LIN',	'MEX',	'MAD'];
  ers=[1,2,3,4,5,6,7,8,9,10];
  crs=[1,2,3,4,5,6,7,8,9,10];
  asinpriority=[1,2,3,4];
  ngOnInit() {
    this.outflowForm = new FormGroup({
      "class": new FormControl(),
      "asin_priority": new FormControl(),
      "product_category": new FormControl(),
      "enforcement_risk_score": new FormControl(),
      "csb_risk_score": new FormControl(),
      "audittype": new FormControl(),
      "decision": new FormControl(),
      "manager_id": new FormControl(),
      "asin_auditor": new FormControl(),
      "reviewday": new FormControl(),
      "reviewweek": new FormControl(),
      "reviewmonth": new FormControl(),      
      "outflowtype": new FormControl(),
      "bulktype": new FormControl(),
      "neiflag": new FormControl(),
      "marketplace": new FormControl(),
      "node": new FormControl(),
      "org": new FormControl(),
      "sla": new FormControl()
    })
    this.filteredOptionsMP=this.outflowForm.get("marketplace").valueChanges
    .pipe(
      startWith(''),
      map((value:string) => this._filterMP(value)
      )
      );
    this.filteredOptionsNode=this.outflowForm.get("node").valueChanges
    .pipe(
      startWith(''),
      map((value:string) => this._filterNode(value))
      );
    this.outflowForm.valueChanges.subscribe(obj => {
      if(this.appService.selectedId!=undefined && !this.appService.selectedId.includes('node')
      && !this.appService.selectedId.includes('marketplace') && !this.appService.selectedId.includes('enforcementriskscore')
      && !this.appService.selectedId.includes('csbriskscore')){
        let control = obj[this.appService.selectedId];
        if(control.length>=1){
          this.outflowService.outflowAutoComplete(control).subscribe((elm:string[]) => {
            this.filteredOptionsOutflow=of(elm);
            console.log('service response outflowauto -->',elm);
          });
        }
      }
      })
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
  callOutflowFilterService(model:any){
    this.outflowService.outflowFormSubmit(model).subscribe((response: any)=>{
      //console.log(response);
      if(response!=null && response!=undefined && response.length>0){
        this.outflowService.downloadFile(response,"dataOutflow",Object.keys(response[0]));
      }
      else{
        alert('Data not available for filtered options');
      }
    },error => alert(error));
  }

  onSubmit() {
    //alert(JSON.stringify(this.outflowForm.value));
    console.log(this.outflowForm.value);
    var objSubmit=
    {
      'Class':[],
      'asin_priority':[],
      'product_category':[],
      'audit_type':[],
      'decision':[],
      'asin_auditor':[],
      'manager_id':[],
      'review_day':"",
      'review_week':[],
      'review_month':[],
      'outflow_type':[],
      'bulk_type':[],
      'enforcement_risk_score':[],
      'csb_risk_score':[],
      'marketplace':[],
      'node':[],
      'org':[],
      'nei_flag':[],
      'sla':[]
    }

    if(this.outflowForm.value.reviewday!=undefined && this.outflowForm.value.reviewday!=null)
     objSubmit.review_day=this.datePipe.transform(this.outflowForm.value.reviewday,"MM/dd/yyyy");
    if(this.outflowForm.value.class!=undefined && this.outflowForm.value.class!=null)
    objSubmit.Class.push(this.outflowForm.value.class);    
    if(this.outflowForm.value.audit_type!=undefined && this.outflowForm.value.audit_type!=null)
    objSubmit.audit_type.push(this.outflowForm.value.audittype);
    if(this.outflowForm.value.asin_priority!=undefined && this.outflowForm.value.asin_priority!=null)
    objSubmit.asin_priority=this.outflowForm.value.asin_priority;
    if(this.outflowForm.value.product_category!=undefined && this.outflowForm.value.product_category!=null)
    objSubmit.product_category.push(this.outflowForm.value.product_category);
    if(this.outflowForm.value.asin_auditor!=undefined && this.outflowForm.value.asin_auditor!=null)
    objSubmit.asin_auditor.push(this.outflowForm.value.asin_auditor);
    if(this.outflowForm.value.decision!=undefined && this.outflowForm.value.decision!=null)
    objSubmit.decision.push(this.outflowForm.value.decision);
    if(this.outflowForm.value.outflowtype!=undefined && this.outflowForm.value.outflowtype!=null)
    objSubmit.outflow_type.push(this.outflowForm.value.outflow_type);
    if(this.outflowForm.value.enforcement_risk_score!=undefined && this.outflowForm.value.enforcement_risk_score!=null)
    objSubmit.enforcement_risk_score=this.outflowForm.value.enforcement_risk_score;
    if(this.outflowForm.value.csb_risk_score!=undefined && this.outflowForm.value.csb_risk_score!=null)
    objSubmit.csb_risk_score=this.outflowForm.value.csb_risk_score;
    if(this.outflowForm.value.marketplace!=undefined && this.outflowForm.value.marketplace!=null)
    objSubmit.marketplace.push(this.outflowForm.value.marketplace);
    if(this.outflowForm.value.node!=undefined && this.outflowForm.value.node!=null)
    objSubmit.node.push(this.outflowForm.value.node);
    //console.log(objSubmit);
    this.callOutflowFilterService(objSubmit);

  }

}
