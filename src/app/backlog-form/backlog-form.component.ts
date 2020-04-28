import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { OutflowService } from '../services/outflow.service';
import { AppService } from '../services/app.service';
import { startWith, map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { BacklogService } from '../services/backlog.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-backlog-form',
  templateUrl: './backlog-form.component.html',
  styleUrls: ['./backlog-form.component.scss']
})
export class BacklogFormComponent implements OnInit {

  constructor(private backlogService: BacklogService, private appService: AppService, private datePipe: DatePipe, private loadService:LoaderService) { }
  backlogForm;
  filteredOptionsbacklog: Observable<string[]>;
  mpOptions=[ 'DE',	'AU',	'NA',	'IT',	'UK',	'AE',	'ES',	'FR',	'IN',	'JP',	'MX',	'SG',	'NL',	'TR',	'CN',	'SA',	'BR'];
  nodeOptions=[ 'GDN',	'BLR',	'IAS',	'AMM',	'PEK',	'SJO',	'SZX',	'LUX',	'MUC',	'AMS',	'SEA',	'BNA',	'SHA',	'HND',	'DXB',	'LTN',	'GRU',	'CVG',	'LHR',	'SYD',	'CDG',	'SIN',	'LIN',	'MEX',	'MAD'];
  ers=[1,2,3,4,5,6,7,8,9,10];
  crs=[1,2,3,4,5,6,7,8,9,10];
  asinpriority=[1,2,3,4];
  ngOnInit() {
    this.backlogForm = new FormGroup({
      "classname": new FormControl(),
      "marketplace": new FormControl(),
      "reviewstatus": new FormControl(),
      "priority": new FormControl(),
      "workingstatus": new FormControl(),      
      "productcategory": new FormControl(),
      "enforcementriskscore": new FormControl(),
      "csbriskscore": new FormControl(),
      "policyversionid": new FormControl()
    });
    this.backlogForm.valueChanges.subscribe(obj => {
      if(this.appService.selectedId!=undefined && !this.appService.selectedId.includes('node')
      && !this.appService.selectedId.includes('marketplace') && !this.appService.selectedId.includes('enforcementriskscore')
      && !this.appService.selectedId.includes('csbriskscore')){
        let control = obj[this.appService.selectedId];
        if(control.length>=1){
          this.loadService.show();
          this.backlogService.backlogAutoComplete(control).subscribe((elm:string[]) => {
            this.filteredOptionsbacklog=of(elm);
            this.loadService.hide();
            console.log('service response outflowauto -->',elm);
          });
        }
      }
      })
  }

  callBacklogFilterService(model:any){
    this.loadService.show();
    this.backlogService.backlogFormSubmit(model).subscribe((response: any)=>{      
      //console.log(response);
      if(response!=null && response!=undefined && response.length>0){
        this.backlogService.downloadFile(response,"dataBacklog",Object.keys(response[0]));
        this.loadService.hide();
      }
      else{
        this.loadService.hide();
        alert('Data not available');
      }
    },error => {
      this.loadService.hide();
      alert(error)}
      );
    //this.loadService.hide();
  }

  onSubmit() {   
    
    console.log(this.backlogForm.value);
    var objSubmit=
    {
      'class_name':[],
      'priority':[],
      'product_category':[],
      'review_status':[],      
      'enforcement_risk_score':[],
      'csb_risk_score':[],
      'marketplace':[],
      'working_status':[],
      'policy_version_id':[]      
    }

    if(this.backlogForm.value.reviewstatus!=undefined && this.backlogForm.value.reviewstatus!=null)
     objSubmit.review_status=this.backlogForm.value.reviewstatus;
    if(this.backlogForm.value.classname!=undefined && this.backlogForm.value.classname!=null)
    objSubmit.class_name.push(this.backlogForm.value.classname);        
    if(this.backlogForm.value.priority!=undefined && this.backlogForm.value.priority!=null)
    objSubmit.priority=this.backlogForm.value.priority;
    if(this.backlogForm.value.productcategory!=undefined && this.backlogForm.value.productcategory!=null)
    objSubmit.product_category.push(this.backlogForm.value.productcategory);
    if(this.backlogForm.value.workingstatus!=undefined && this.backlogForm.value.workingstatus!=null)
    objSubmit.working_status.push(this.backlogForm.value.workingstatus);    
    if(this.backlogForm.value.enforcementriskscore!=undefined && this.backlogForm.value.enforcementriskscore!=null)
    objSubmit.enforcement_risk_score=this.backlogForm.value.enforcementriskscore;
    if(this.backlogForm.value.csbriskscore!=undefined && this.backlogForm.value.csbriskscore!=null)
    objSubmit.csb_risk_score=this.backlogForm.value.csbriskscore;
    if(this.backlogForm.value.marketplace!=undefined && this.backlogForm.value.marketplace!=null)
    objSubmit.marketplace=this.backlogForm.value.marketplace;
    if(this.backlogForm.value.policyversionid!=undefined && this.backlogForm.value.policyversionid!=null)
    objSubmit.policy_version_id.push(this.backlogForm.value.policyversionid);
    //console.log(objSubmit);
    this.callBacklogFilterService(objSubmit);
  }

}
