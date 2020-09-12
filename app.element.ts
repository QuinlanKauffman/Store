import { textChangeRangeIsUnchanged } from "typescript";
import { IElement } from "./interfaces";

export class App implements IElement {
    message: string;
    constructor(message: string){
        console.log('App constructor called...');
        this.message = message;
    }
    getOuterHTMLElement(): HTMLElement {
        let div: HTMLElement = document.createElement('div');
        div.innerHTML = this.message;
        return div;
    }
}