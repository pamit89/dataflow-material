import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {
    @HostBinding('style.backgroundColor') bgColor;
    @HostBinding('style.color') color;

    @HostListener('mouseenter') onMouseEnter() {
        this.bgColor = '#dddddd';
        this.color = '#3f51b5';
    };


    @HostListener('mouseleave', ['$event']) onMouseLeave(event) {
        this.bgColor = 'transparent';
        if (!event.target.className.match(/active/)) {
            this.color = 'inherit';
        }
    }
}