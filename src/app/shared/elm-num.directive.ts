import { Directive, Input, HostListener, HostBinding } from "@angular/core";
import { AppService } from '../inflow-form/app.service';

@Directive({
    selector: '[elm]'
})
export class ElmNumDirective {
    @Input() elm: string;
    constructor(private appService: AppService) { }

    @HostListener('focus') inputSelected() {
        this.appService.selectedElm = this.elm;
    }
}