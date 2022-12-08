/*
Run this command:
browserify main.js -p esmify > bundle.js
*/


//////////////////////////////////////////////////////////////
//Libraries
//////////////////////////////////////////////////////////////
//financejs library 
const finance = require('@travishorn/finance');






// Console Test Examples
// console.log(Math.round(finance.pmt(0.0525, 5, -10000) * 100) / 100);
// const values = [-1500, 500, 500, 500, 500];
// console.log((Math.round(finance.irr(values) * 100) / 100) * 100);


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
let totalOutput = document.querySelector('#totalOutput');

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
        //console.log(cursorPosition);
        inputText.value = inputText.value.substring(0,cursorPosition) + calcButton[i].innerText + inputText.value.substring(cursorPosition);
        //inputText.value = inputText.value += calcButton[i].innerText;
        result = eval(inputText.value);

        totalOutput.innerText = eval(inputText.value);

        
    });

}

// Delete Button
deleteButton.addEventListener('click',function(){
    let cursorPosition = inputText.selectionStart;
    inputText.value = inputText.value.substring(0,cursorPosition-1) + inputText.value.substring(cursorPosition);
    inputText.focus()
    inputText.setSelectionRange(cursorPosition-1, cursorPosition-1)
    totalOutput.innerText = eval(inputText.value);
    
    if(inputText.value === undefined){
        totalOutput.innerText = "";
    }

});

// Clear Button
clearButton.addEventListener('click',function(){
    result = 0;
    inputText.value = "";
    totalOutput.innerText = "";
});

// = Button
eqlButton.addEventListener('click',function(){
    inputText.value = result;
    //totalOutput.innerText = "";

});

// +/- Button
negButton.addEventListener('click',function(){
    
    if(inputText.value.includes('-')){
        inputText.value = inputText.value.replace("-","");
        totalOutput.innerText = eval(inputText.value);
    }
    else{
        inputText.value = `-${inputText.value}`;
        totalOutput.innerText = eval(inputText.value);
    }
    
})

// N Button
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

// I/Y Button
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

// PV Button
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

// PMT Button
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

// FV Button
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

// CPT Button
cptButton.addEventListener('click', function(){
    console.log("CPT Button Clicked!")
    if(n === undefined){
        n = finance.nper(r,pmt,pv,fv,false);
        inputText.value = n;
        totalOutput.innerText = "";
        nButton.style.background = "#98fb98";
        console.log(`N: ${n}`);
        console.log(`I/Y: ${r}`);
        console.log(`PV: ${pv}`);
        console.log(`PMT: ${pmt}`);
        console.log(`FV: ${fv}`);

    }
    else if(r === undefined){
        r = finance.rate(n,pmt,pv,fv,false)
        inputText.value = r;
        totalOutput.innerText = "";
        iyButton.style.background = "#98fb98";
        console.log(`N: ${n}`);
        console.log(`I/Y: ${r}`);
        console.log(`PV: ${pv}`);
        console.log(`PMT: ${pmt}`);
        console.log(`FV: ${fv}`);
    }
    else if(pv === undefined){
        pv = finance.pv(r,n,pmt,fv,false)
        inputText.value = pv;
        totalOutput.innerText = "";
        pvButton.style.background = "#98fb98";
        console.log(`N: ${n}`);
        console.log(`I/Y: ${r}`);
        console.log(`PV: ${pv}`);
        console.log(`PMT: ${pmt}`);
        console.log(`FV: ${fv}`);
    }
    else if(pmt === undefined){
        pmt = finance.pmt(r,n,pv,fv,false);
        inputText.value = pmt;
        totalOutput.innerText = "";
        pmtButton.style.background = "#98fb98";
        console.log(`N: ${n}`);
        console.log(`I/Y: ${r}`);
        console.log(`PV: ${pv}`);
        console.log(`PMT: ${pmt}`);
        console.log(`FV: ${fv}`);
    }
    else if(fv === undefined){
        fv = finance.fv(r,n,pmt, pv,false);
        inputText.value = fv;
        totalOutput.innerText = "";
        fvButton.style.background = "#98fb98";
        console.log(`N: ${n}`);
        console.log(`I/Y: ${r}`);
        console.log(`PV: ${pv}`);
        console.log(`PMT: ${pmt}`);
        console.log(`FV: ${fv}`);
    }
});

//////////////////////////////////////////////////////////////
//Financial Facts
//////////////////////////////////////////////////////////////
//Facts Source - https://investinganswers.com/articles/99-surprising-financial-facts-most-investors-dont-know
let finFact = document.querySelector("#financialFact");
let fact = document.querySelector("#fact");
let closeButton = document.querySelector("#closeButton")
closeButton.addEventListener('click',function(){
    finFact.remove();
})
function readFinFacts(){
    fetch('financialFacts.json')           
    .then(response => response.json())
    .then(data => {
        let randomFact = Math.floor((Math.random() * data.length) + 0);
        fact.innerText = data[randomFact].Fact;
    });
}
readFinFacts();
