const worker = new Worker('worker.js');
var flag1 = false;
const btn1 = document.getElementById('changeBackground');
const btn2 = document.getElementById('runLoop');

btn1.addEventListener('click',()=>{
    const body = document.getElementsByTagName('body');
    flag1 ? body[0].style.background="green" : body[0].style.background="blue";
    flag1 = !flag1;
})

btn2.addEventListener('click',()=>{
    worker.postMessage('sum');
})

worker.onmessage = function(msg){
    alert(`The total is ${msg.data}`);
}