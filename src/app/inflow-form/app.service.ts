import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppService {
    private elm: string;

    get selectedElm() {
        return this.elm;
    }

    set selectedElm(e) {
        this.elm = e;
    }
}