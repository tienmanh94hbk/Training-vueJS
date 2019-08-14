import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appRuleInput]'
})
export class RuleInputDirective {
    @HostListener('keypress') onkeypress(e) {
        const event = e || window.event;
        if (event) {
            return this.isNumberKey(event);
        }
    }

    isNumberKey(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    constructor(private el: ElementRef) {
    }
}
