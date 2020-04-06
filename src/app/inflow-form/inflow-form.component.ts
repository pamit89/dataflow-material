import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { InflowService } from '../services/inflow.service';

@Component({
  selector: 'app-inflow-form',
  templateUrl: './inflow-form.component.html',
  styleUrls: ['./inflow-form.component.scss']
})
export class InflowFormComponent implements OnInit {
  constructor(private inflowService: InflowService) { }

  inflowForm;
  options: string[] = ['One', 'Two', 'Three'];
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


    this.filteredOptions = this.inflowForm.get('inflowyw').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => {
          //this._filter(value)
          if (value.length >= 3) {
            this.inflowService.inflowAutoComplete(value).subscribe((result: string[]) => {
              //this._filter(result);
              console.log(result);
            })
          }
        })
      );
  }

  onSubmit() {
    alert(JSON.stringify(this.inflowForm.value));
    console.log(this.inflowForm.value);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
