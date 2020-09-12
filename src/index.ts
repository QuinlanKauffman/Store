import { App } from "./app.element.js";

let app: App = new App('Forrest');
document.body.append(app.getOuterHTMLElement());

setTimeout(() => {
    app.updateMessage('Forrest has lots of toys');
}, 3000);