import { Singleton } from "./singleton";

let singletonOne = Singleton.getInstance();
let singletonTwo = Singleton.getInstance();

singletonOne.setNumber(1);
singletonTwo.setNumber(2);
console.log(singletonOne.getNumber());
console.log(singletonTwo.getNumber());