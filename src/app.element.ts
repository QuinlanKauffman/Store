import { IElement } from "./interfaces.js";

export class App implements IElement {
    message: string;
    div: HTMLElement;
    constructor(message: string){
        console.log('Creating', this.constructor.name);
        this.div = document.createElement('div');
        this.message = message;
    }
    getOuterHTMLElement(): HTMLElement {
        this.div.innerHTML = this.message;
        return this.div;
    }
    updateMessage(message: string): void {
        this.message = message;
        this.div.innerHTML = this.message;
    }
}