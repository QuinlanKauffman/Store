console.log('running...');
let div = document.createElement('div');
div.innerText = "Hello";
document.body.append(div);

setTimeout(() => {
    div.innerText += " World"; // updating the reference
}, 5000);