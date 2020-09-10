//import { Promise } from 'typescript'

let baseURL = BaseURL.getInstance();
let endpointURL = "";

function get(): Promise<any> {
    return new Promise(function (resolve, reject) => {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", baseURL + endpointURL);
    });
}