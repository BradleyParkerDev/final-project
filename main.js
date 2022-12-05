/*

Run this command:
browserify main.js -p esmify > bundle.js

*/


//////////////////////////////////////////////////////////////
//Libraries
//////////////////////////////////////////////////////////////
//financejs library 

const finance = require('@travishorn/finance');

console.log(Math.round(finance.pmt(0.0525, 5, -10000) * 100) / 100);
const values = [-1500, 500, 500, 500, 500];
  
console.log((Math.round(finance.irr(values) * 100) / 100) * 100);


//////////////////////////////////////////////////////////////
// Variables
//////////////////////////////////////////////////////////////

let n = undefined;
let r = undefined;
let pv = undefined;
let pmt = undefined;
let fv = undefined;
let result = 0;


//////////////////////////////////////////////////////////////
//Buttons and Screens
//////////////////////////////////////////////////////////////

let caluculator = document.querySelector('#calculator');

//Screens
let screenview = document.querySelector('#screenview');
let inputText = document.querySelector('#inputText');
let calcualtion = document.querySelector('#calculation');
//calc-buttons
let calcButton = document.querySelectorAll("#calculator .calc-button")

//fin-buttons
let finButton = document.querySelectorAll("#calculator .fin-button")



//Financial Buttons
let nButton = document.querySelector('#button-n');
let iyButton = document.querySelector('#button-iy');
let pvButton = document.querySelector('#button-pv');
let pmtButton = document.querySelector('#button-pmt');
let fvButton = document.querySelector('#button-fv');
let cptButton = document.querySelector('#button-cpt');
let leftPButton = document.querySelector('#button-left-p');
let rightPButton = document.querySelector('#button-right-p');
let deleteButton = document.querySelector('#button-delete');
let clearButton = document.querySelector('#button-clear');

//Operator Buttons
let negButton = document.querySelector('#button-neg');
let decButton = document.querySelector('#button-dec');
let divButton = document.querySelector('#button-div');
let mulButton = document.querySelector('#button-mul');
let minButton = document.querySelector('#button-min');
let plsButton = document.querySelector('#button-pls');
let eqlButton = document.querySelector('#button-eql');

//Number Buttons
let button0 = document.querySelector('#button-0');
let button1 = document.querySelector('#button-1');
let button2 = document.querySelector('#button-2');
let button3 = document.querySelector('#button-3');
let button4 = document.querySelector('#button-4');
let button5 = document.querySelector('#button-5');
let button6 = document.querySelector('#button-6');
let button7 = document.querySelector('#button-7');
let button8 = document.querySelector('#button-8');
let button9 = document.querySelector('#button-9');


//////////////////////////////////////////////////////////////
//Event Handlers
//////////////////////////////////////////////////////////////
for(let i = 0; i < calcButton.length; i++){
    calcButton[i].addEventListener('click', function(){
        let cursorPosition = inputText.selectionStart;
        console.log(cursorPosition);
        inputText.value = inputText.value.substring(0,cursorPosition) + calcButton[i].innerText + inputText.value.substring(cursorPosition);
        //inputText.value = inputText.value += calcButton[i].innerText;
        result = eval(inputText.value);
        
    });

}
eqlButton.addEventListener('click',function(){
    inputText.value = result;
});

deleteButton.addEventListener('click',function(){
    let cursorPosition = inputText.selectionStart;
    inputText.value = inputText.value.substring(0,cursorPosition-1) + inputText.value.substring(cursorPosition);
    inputText.focus()
    inputText.setSelectionRange(cursorPosition-1, cursorPosition-1)
});

clearButton.addEventListener('click',function(){

    for(let i = 0; i < finButton.length; i ++){
        finButton[i] = undefined;
        finButton[i].style.background = "";
    }
    // n = undefined;
    // r = undefined;
    // pv = undefined;
    // pmt = undefined;
    // fv = undefined;
    result = 0;
    inputText.value = "";
});

nButton.addEventListener('click',function(){
    n = eval(inputText.value);
    if(n !== undefined){
        nButton.style.background = "#98fb98";
    }
    else{
        nButton.style.background = "";

    }
    console.log(`N: ${n}`);
});
iyButton.addEventListener('click',function(){
    r = eval(inputText.value);
    if(r !== undefined){
        iyButton.style.background = "#98fb98";
    }
    else{
        iyButton.style.background = "";

    }
    console.log(`I/Y: ${r}`);
});
pvButton.addEventListener('click',function(){
    pv = eval(inputText.value);
    if(pv !== undefined){
        pvButton.style.background = "#98fb98";
    }
    else{
        pvButton.style.background = "";

    }
    console.log(`PV: ${pv}`);

});
pmtButton.addEventListener('click',function(){
    pmt = eval(inputText.value);
    if(pmt !== undefined){
        pmtButton.style.background = "#98fb98";
    }
    else{
        pmtButton.style.background = "";

    }
    console.log(`PMT: ${pmt}`);

});
fvButton.addEventListener('click',function(){
    fv = eval(inputText.value);
    if(fv !== undefined){
        fvButton.style.background = "#98fb98";
    }
    else{
        fvButton.style.background = "";
    }
    console.log(`FV: ${fv}`);

});

cptButton.addEventListener('click', function(){
    console.log("CPT Button Clicked!")
    if(n === undefined){
        n = finance.nper(r,pmt,pv,fv,false);

    }
    else if(r === undefined){
        r = finance.rate(n,pmt,pv,fv,false)
        inputText.value = r;

    }
    else if(pv === undefined){
        pv = finance.pv(r,n,pmt,fv,false)
        inputText.value = pv;

    }
    else if(pmt === undefined){
        pmt = finance.pmt(r,n,pv,fv,false);
        inputText.value = pmt;

    }
    else if(fv === undefined){
        fv = finance.fv(r,n,pmt, pv,false);
        console.log(finance.fv(.1,1,0,-100,false));

        console.log(fv)
        inputText.value = fv;

    }
});

console.log(finance.fv(.1,1,0,-100,false));
console.log(finance.nper(.1,0,-100,110,false));
/*
pv(rate, nper, pmt, [fv], [type]);
fv(rate, nper, pmt, pv, [type]);
pmt(rate, nper, pv, [fv], [type]);
rate(nper, pmt, pv, [fv], [type], [guess]);
*/