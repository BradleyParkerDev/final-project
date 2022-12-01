/*

Run this command:
browserify main.js -p esmify > bundle.js

*/


//////////////////////////////////////////////////////////////
//Libraries
//////////////////////////////////////////////////////////////
//financejs library 

const finance = require('@travishorn/finance')

console.log(Math.round(finance.pmt(0.0525, 5, -10000) * 100) / 100);
const values = [-1500, 500, 500, 500, 500];
  
console.log((Math.round(finance.irr(values) * 100) / 100) * 100);


//////////////////////////////////////////////////////////////
// Variables
//////////////////////////////////////////////////////////////

let n = 0;
let r = 0;
let pv = 0;
let pmt = 0;
let fv = 0;
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
        inputText.value = inputText.value += calcButton[i].innerText;
        result = eval(inputText.value)
        
    });

}
eqlButton.addEventListener('click',function(){
    inputText.value = result;
});

// deleteButton.addEventListener('click',function(){
//     inputText.value = inputText.value -= ;
// });

clearButton.addEventListener('click',function(){
    n = 0;
    r = 0;
    pv = 0;
    pmt = 0;
    fv = 0;
    result = 0;
    inputText.value = "";
});

nButton.addEventListener('click',function(){
    n = eval(inputText.value);
    console.log(`N: ${n}`);
});
iyButton.addEventListener('click',function(){
    r = eval(inputText.value);
    console.log(`I/Y: ${r}`);
});
pvButton.addEventListener('click',function(){
    pv = eval(inputText.value);
    console.log(`PV: ${pv}`);

});
pmtButton.addEventListener('click',function(){
    pmt = eval(inputText.value);
    console.log(`PMT: ${pmt}`);

});
fvButton.addEventListener('click',function(){
    fv = eval(inputText.value);
    console.log(`FV: ${fv}`);

});

