import { Directive, Input, HostListener, HostBinding } from "@angular/core";
import { AppService } from '../services/app.service';

@Directive({
    selector: '[elm]'
})
export class ElmNumDirective {
    @Input() elm: string;
    @Input() id: string;

    constructor(private appService: AppService) { }

    @HostListener('focus') inputSelected() {
        this.appService.selectedElm = this.elm;
        this.appService.selectedId = this.id;
    }
}