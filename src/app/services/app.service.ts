import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppService {
    private elm: string;
    private id: string;

    get selectedElm() {
        return this.elm;
    }

    set selectedElm(e) {
        this.elm = e;
    }

    get selectedId() {
        return this.id;
    }

    set selectedId(id) {
        this.id = id;
    }
}