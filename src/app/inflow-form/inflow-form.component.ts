import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { InflowService } from '../services/inflow.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-inflow-form',
  templateUrl: './inflow-form.component.html',
  styleUrls: ['./inflow-form.component.scss']
})
export class InflowFormComponent implements OnInit {
  constructor(private inflowService: InflowService, private appService: AppService) { }

  inflowForm;

  ngOnInit() {
    this.inflowForm = new FormGroup({
      asincatchdate: new FormControl(new Date()),
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
      "node": new FormControl(),
      "inflow": new FormControl()
    })


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
    )
  }
  callInflowFilterService(model: any) {
    this.inflowService.inflowFormSubmit(model).subscribe((response: any) => {
      //console.log(response);
      if (response != null && response != undefined && response.length > 0) {
        this.inflowService.downloadFile(response, "dataInflow", Object.keys(response[0]));
      }
    });
  }
  onSubmit() {
    //alert(JSON.stringify(this.inflowForm.value));
    var objSubmit =
    {
      "asin_catch_date": [],
      "inflow_yw": [],
      "inflow_ym": [],
      "Class": [],
      "working_status": [],
      "asin_review_priority": [],
      "product_category": [],
      "policy_type": [],
      "enforcement_risk_score": [],
      "csb_risk_score": [],
      "policy_entity_id": [],
      "marketplace": [],
      "node": [],
      "inflow": []
    }
    //objSubmit.asinreviewpriority.push(this.inflowForm.value.asincatchdate);
    // if(this.inflowForm.value.asincatchdate!=undefined && this.inflowForm.value.asincatchdate!=null)
    // objSubmit.asin_catch_date.push(this.inflowForm.value.asincatchdate);
    if (this.inflowForm.value.inflowyw != undefined && this.inflowForm.value.inflowyw != null)
      objSubmit.inflow_yw.push(this.inflowForm.value.inflowyw);
    if (this.inflowForm.value.inflowym != undefined && this.inflowForm.value.inflowym != null)
      objSubmit.inflow_ym.push(this.inflowForm.value.inflowym);
    if (this.inflowForm.value.Class != undefined && this.inflowForm.value.Class != null)
      objSubmit.Class.push(this.inflowForm.value.Class);
    if (this.inflowForm.value.workingstatus != undefined && this.inflowForm.value.workingstatus != null)
      objSubmit.working_status.push(this.inflowForm.value.workingstatus);
    if (this.inflowForm.value.asin_review_priority != undefined && this.inflowForm.value.asin_review_priority != null)
      objSubmit.asin_review_priority.push(this.inflowForm.value.asinreviewpriority);
    if (this.inflowForm.value.product_category != undefined && this.inflowForm.value.product_category != null)
      objSubmit.product_category.push(this.inflowForm.value.productcategory);
    if (this.inflowForm.value.policy_type != undefined && this.inflowForm.value.policy_type != null)
      objSubmit.policy_type.push(this.inflowForm.value.policytype);
    if (this.inflowForm.value.policy_entity_id != undefined && this.inflowForm.value.policy_entity_id != null)
      objSubmit.policy_entity_id.push(this.inflowForm.value.policyentityid);
    if (this.inflowForm.value.enforcement_risk_score != undefined && this.inflowForm.value.enforcement_risk_score != null)
      objSubmit.enforcement_risk_score.push(this.inflowForm.value.enforcementriskscore);
    if (this.inflowForm.value.csb_risk_score != undefined && this.inflowForm.value.csb_risk_score != null)
      objSubmit.csb_risk_score.push(this.inflowForm.value.csbriskscore);
    if (this.inflowForm.value.marketplace != undefined && this.inflowForm.value.marketplace != null)
      objSubmit.marketplace.push(this.inflowForm.value.marketplace);
    if (this.inflowForm.value.node != undefined && this.inflowForm.value.node != null)
      objSubmit.node.push(this.inflowForm.value.node);
    if (this.inflowForm.value.inflow != undefined && this.inflowForm.value.inflow != null)
      objSubmit.inflow.push(this.inflowForm.value.inflow);
    //console.log(objSubmit);
    this.callInflowFilterService(objSubmit);
  }
}
