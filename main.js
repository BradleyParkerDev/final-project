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
        pmtButton.style.background = "#98fb98";
        console.log(`N: ${n}`);
        console.log(`I/Y: ${r}`);
        console.log(`PV: ${pv}`);
        console.log(`PMT: ${pmt}`);
        console.log(`FV: ${fv}`);
    }
    else if(fv === undefined){
        fv = finance.fv(r,n,pmt, pv,false);
        console.log(finance.fv(.1,1,0,-100,false));
        inputText.value = fv;
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
let financialFact = [];
financialFact[0] = "The United States generates more than 20% of the world's GDP with about 4% of the world's population.";
financialFact[1] = "In 2004, Alan Greenspan said, 'American consumers might benefit if lenders provided greater mortgage product alternatives to the traditional fixed-rate mortgage.' Since 2007, total losses attributable to subprime, Alt-A and other alternative mortgage products have been in the trillions.";
financialFact[2] = "The first self-made female millionaire was Madam C.J. Walker. In the early 1900s, Walker developed and operated a cosmetics empire focused on African-American women. She was quoted as saying: 'I am a woman who came from the cotton fields of the South. From there I was promoted to the washtub. From the washtub I was promoted to the cook kitchen and from there I promoted myself into the business of manufacturing hair goods and preparations. I have built my own factory on my own ground.'";
financialFact[3] = "One of the smallest economies to have its own U.S.-listed ETF is Israel. The ETF trades under the ticker symbol EIS.";
financialFact[4] = "The median income of persons 65 and older in 2010 was $25,704 for males and $15,072 for females.";
financialFact[5] = "Oakley, Inc. chose the ticker symbol OO because it looks like a pair of sunglasses.";
financialFact[6] = "The New York Stock Exchange was born on May 17, 1792 with the signing of the Buttonwood Agreement. The agreement, which laid out trading rules and regulations, was signed by 24 stock brokers underneath a buttonwood tree. The entire contract was only two sentences in length.";
financialFact[7] = "The history of Wall Street dates back to the 1600s, when New York was called the New Amsterdam settlement. Back then, before the bells and exchanges, it was merely a pathway that ran alongside a wall protecting the settlement from Native American attacks. In a moment of creativity, the citizens named the corridor 'Wall Street.'";
financialFact[8] = "Flatbush National Bank of Brooklyn was the first bank to issue a credit card in 1946.";
financialFact[9] = "The highest-price stock currently sold on the NYSE is Warren Buffett's Berkshire Hathaway, Class A (NYSE: BRK-A), which sells for more than $400,000 per share.";

let finFact = document.querySelector("#financialFact")
let fact = document.querySelector("#fact");
let closeButton = document.querySelector("#closeButton")
let randomFact = Math.floor((Math.random() * 10) + 0);
fact.innerText = financialFact[randomFact];


closeButton.addEventListener('click',function(){

    finFact.remove();
})