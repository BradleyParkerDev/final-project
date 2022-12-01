//////////////////////////////////////////////////////////////
//Libraries
//////////////////////////////////////////////////////////////
//financejs library 
const Finance = require('financejs');
const finance = new Finance();

//travis horn librabrary - How do I include this?
// const  = require('@travishorn/finance');
// const  = new ();

//////////////////////////////////////////////////////////////
// Variables
//////////////////////////////////////////////////////////////

let n = 0;
let i = 0;
let pv = 0;
let pmt = 0;
let fv = 0;

//////////////////////////////////////////////////////////////
//Buttons and Screens
//////////////////////////////////////////////////////////////

let caluculator = document.querySelector('#calculator');

//Screens
let screenview = document.querySelector('#screenview');
//I removed the smaller screens, there is only one screen now. 

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