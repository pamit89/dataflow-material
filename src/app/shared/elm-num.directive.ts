import { Directive, Input, HostListener } from "@angular/core";
import { AppService } from '../services/app.service';
import { of } from 'rxjs';

@Directive({
    selector: '[elm]'
})
export class ElmNumDirective {
    @Input() elm: string;
    @Input() id: string;

    constructor(private appService: AppService) { }

    @HostListener('focus') inputSelected() {
        this.appService.filteredOptions = of([]);
        this.appService.selectedElm = this.elm;
        this.appService.selectedId = this.id;
    }
}