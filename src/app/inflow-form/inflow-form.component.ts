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
  filteredOptions: Observable<string[]>;
  ngOnInit() {
    this.inflowForm = new FormGroup({
      asincatchdate: new FormControl([]),
      "inflowyw": new FormControl(),
      "potentialclass": new FormControl(),
      "createdate": new FormControl(),
      "workingstatus": new FormControl(),
      "asicreviewpriority": new FormControl(),
      "productcategory": new FormControl(),
      "actionclientname": new FormControl(),
      "policytype": new FormControl(),
      "enforcementriskscore": new FormControl(),
      "csbriskscore": new FormControl(),
      "policyentityid": new FormControl(),
      "marketplacenode": new FormControl(),
      "inflow": new FormControl()
    })


    this.inflowForm.valueChanges.subscribe(obj => {
      let control = obj[this.appService.selectedId];
      if (control.length >= 3) {
        this.inflowService.inflowAutoComplete(control).subscribe((elm: string[]) => {
          this.filteredOptions = of(elm);
          console.log('service Response -->', elm);
        });
      }
    }
    )
  }

  onSubmit() {
    //alert(JSON.stringify(this.inflowForm.value));
    console.log(this.inflowForm.value);
  }
}
