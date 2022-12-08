(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
Run this command:
browserify main.js -p esmify > bundle.js
*/


//////////////////////////////////////////////////////////////
//Libraries
//////////////////////////////////////////////////////////////
//financejs library 
const finance = require('@travishorn/finance');
const formatter = new Intl.NumberFormat('en');
const num = 120000000;
console.log(formatter.format(num));
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
        inputText.value = inputText.value.substring(0,cursorPosition) + calcButton[i].innerText + inputText.value.substring(cursorPosition);
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


},{"@travishorn/finance":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Private helper function for the `npv` function.
 */
var _default = (rate, values, npvType, lowerBound, upperBound) => {
  let tmp = 1;
  let tmpTotal = 0;
  let i = lowerBound;
  while (i <= upperBound) {
    const tmp2 = values[i];
    tmp = tmp + tmp * rate;
    if (!(npvType > 0 && tmp2 > 0) || !(npvType < 0 && tmp2 < 0)) {
      tmpTotal = tmpTotal + tmp2 / tmp;
    }
    i++;
  }
  return tmpTotal;
};
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Private helper function for the `rate` function.
 *
 * @remarks
 * Follows a similar pattern to the `pmt` formula.
 */
var _default = (rate, nper, pmt, pv, fv, type) => {
  if (rate === 0) {
    return pv + pmt * nper + fv;
  } else {
    const tmp3 = rate + 1;
    const tmp = Math.pow(tmp3, nper);
    const tmp2 = type !== 0 ? 1 + rate : 1;
    return pv * tmp + pmt * tmp2 * (tmp - 1) / rate + fv;
  }
};
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*
 * Math:
 *
 *                                              (1+rate)^nper -1
 *  fv = -pv*(1+rate)^nper - pmt*(1+rate*type)*------------------
 *                                                   rate
 *
 * If rate equals 0, there is no time value of money consideration and
 * fv = -pv - pmt * nper
 */
/**
 * Calculate the future value given a set of transaction terms.
 *
 * @param rate - Interest rate per the period
 * @param nper - Number of periods
 * @param pmt - Regular payment (must be equal in total value for all periods)
 * @param pv - Present value
 * @param type - When payments are due. false = end of period (default). true =
 * beginning of period
 * @returns The calculated future value
 */
var _default = (rate, nper, pmt, pv, type = false) => {
  if (rate === 0) return -pv - pmt * nper;
  const tmp = type ? 1 + rate : 1;
  const tmp2 = 1 + rate;
  const tmp3 = Math.pow(tmp2, nper);
  return -pv * tmp3 - pmt / rate * tmp * (tmp3 - 1);
};
exports.default = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fv", {
  enumerable: true,
  get: function () {
    return _fv.default;
  }
});
Object.defineProperty(exports, "ipmt", {
  enumerable: true,
  get: function () {
    return _ipmt.default;
  }
});
Object.defineProperty(exports, "irr", {
  enumerable: true,
  get: function () {
    return _irr.default;
  }
});
Object.defineProperty(exports, "nper", {
  enumerable: true,
  get: function () {
    return _nper.default;
  }
});
Object.defineProperty(exports, "npv", {
  enumerable: true,
  get: function () {
    return _npv.default;
  }
});
Object.defineProperty(exports, "pmt", {
  enumerable: true,
  get: function () {
    return _pmt.default;
  }
});
Object.defineProperty(exports, "ppmt", {
  enumerable: true,
  get: function () {
    return _ppmt.default;
  }
});
Object.defineProperty(exports, "pv", {
  enumerable: true,
  get: function () {
    return _pv.default;
  }
});
Object.defineProperty(exports, "rate", {
  enumerable: true,
  get: function () {
    return _rate.default;
  }
});
var _fv = _interopRequireDefault(require("./fv.js"));
var _ipmt = _interopRequireDefault(require("./ipmt.js"));
var _irr = _interopRequireDefault(require("./irr.js"));
var _nper = _interopRequireDefault(require("./nper.js"));
var _npv = _interopRequireDefault(require("./npv.js"));
var _pmt = _interopRequireDefault(require("./pmt.js"));
var _ppmt = _interopRequireDefault(require("./ppmt.js"));
var _pv = _interopRequireDefault(require("./pv.js"));
var _rate = _interopRequireDefault(require("./rate.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./fv.js":4,"./ipmt.js":7,"./irr.js":8,"./nper.js":9,"./npv.js":10,"./pmt.js":11,"./ppmt.js":12,"./pv.js":13,"./rate.js":14}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Private helper function for the `irr` function.
 */
var _default = (values, guess) => {
  guess = typeof guess === "undefined" ? 0.1 : guess;
  let lowerBound = 0;
  const upperBound = values.length - 1;
  let tmpTotal = 0;
  const divRate = 1 + guess;
  while (lowerBound <= upperBound && values[lowerBound] === 0) {
    lowerBound++;
  }
  let i = upperBound;
  const step = -1;
  while (i >= lowerBound) {
    tmpTotal = tmpTotal / divRate;
    tmpTotal = tmpTotal + values[i];
    i = i + step;
  }
  return tmpTotal;
};
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pmt = _interopRequireDefault(require("./pmt.js"));
var _fv = _interopRequireDefault(require("./fv.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*
 * Math:
 *
 * If the period is set as 1 and payments are due in advance (type === true)
 * then no interest is due and the function returns 0.
 *
 * If payments are in arrears (type === false), then ipmt = fv(per-1)*rate If
 * payments are not in arrers (type === true), then ipmt = FV(per-2)*rate
 */
/**
 * Calculate the interest portion of a payment for a given period of a set
 * payment stream.
 *
 * @remarks
 * The formula leverages the `pmt` and `fv` functions. Essentially, it
 * calculates what the future value is at the start of the target period. Since
 * rate is constant for the period, fv * rate will provide the interest portion
 * during that period.
 *
 * @param rate - Interest rate per the period
 * @param per - Specific period
 * @param nper - Number of periods
 * @param pv - Present value
 * @param fv - Future value
 * @param type - When payments are due. false = end of period (default). true =
 * beginning of period
 * @returns The calculated interest portion
 */
var _default = (rate, per, nper, pv, fv = 0, type = false) => {
  const tmp = type ? 2 : 1;
  if (per <= 0 || per >= nper + 1) throw new Error("Invalid period");
  if (type && per === 1) return 0;
  const pmtx = (0, _pmt.default)(rate, nper, pv, fv, type);
  const pv2 = type ? pv + pmtx : pv;
  const tmpFV = (0, _fv.default)(rate, per - tmp, pmtx, pv2);
  return tmpFV * rate;
};
exports.default = _default;

},{"./fv.js":4,"./pmt.js":11}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _internalPv = _interopRequireDefault(require("./internalPv.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Calculate the internal rate of return of a series of regular cash flows.
 *
 * @remarks
 * Negative values represent investments, and positive values represent returns.
 *
 * Essentially, the algorithm uses the secant method to find a rate where the
 * net present value is equal to 0, stepping through the calculations
 * iteratively. Once the rate is within the Epsilon tolerance, the approximate
 * rate is returned.
 *
 * @param values - A set of periodic cash flows
 * @param guess - A guess at the rate
 * @returns The internal rate of return
 */
var _default = (values, guess = 0.1) => {
  const epslMax = 0.0000001;
  const step = 0.00001;
  const iterMax = 39;
  //Check for valid inputs
  if (guess <= -1) throw new Error("Invalid guess");
  if (values.length < 1) return null;
  //Scale up the Epsilon Max based on cash flow values
  let tmp = values[0] > 0 ? values[0] : values[0] * -1;
  values.forEach(value => {
    if (Math.abs(value) > tmp) tmp = Math.abs(value);
  });
  const tmpNpvEpsl = tmp * epslMax * 0.01;
  let tmpRate0 = guess;
  let tmpNpv0 = (0, _internalPv.default)(values, tmpRate0);
  let tmpRate1 = tmpNpv0 > 0 ? tmpRate0 + step : tmpRate0 - step;
  if (tmpRate1 <= -1) throw new Error("Invalid values");
  let tmpNpv1 = (0, _internalPv.default)(values, tmpRate1);
  let i = 0;
  while (i <= iterMax) {
    if (tmpNpv1 === tmpNpv0) {
      tmpRate0 = tmpRate1 > tmpRate0 ? tmpRate0 - step : tmpRate0 + step;
      tmpNpv0 = (0, _internalPv.default)(values, tmpRate0);
      if (tmpNpv1 === tmpNpv0) {
        throw new Error("Invalid values");
      }
    }
    tmpRate0 = tmpRate1 - (tmpRate1 - tmpRate0) * tmpNpv1 / (tmpNpv1 - tmpNpv0);
    //Secant method
    if (tmpRate0 <= -1) tmpRate0 = (tmpRate1 - 1) * 0.5;
    //Give the algorithm a second chance...
    tmpNpv0 = (0, _internalPv.default)(values, tmpRate0);
    tmp = tmpRate0 > tmpRate1 ? tmpRate0 - tmpRate1 : tmpRate1 - tmpRate0;
    const tmp2 = tmpNpv0 > 0 ? tmpNpv0 : tmpNpv0 * -1;
    //Test for npv = 0 and rate convergence
    if (tmp2 < tmpNpvEpsl && tmp < epslMax) return tmpRate0;
    //Transfer values and try again...
    tmp = tmpNpv0;
    tmpNpv0 = tmpNpv1;
    tmpNpv1 = tmp;
    tmp = tmpRate0;
    tmpRate0 = tmpRate1;
    tmpRate1 = tmp;
    i++;
  }
  throw new Error("Maximum iterations exceeded");
};
exports.default = _default;

},{"./internalPv.js":6}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*
 * Math:
 *
 *                   -fv + pmt*(1_rate*type) / rate
 * (1+rate)^nper = ----------------------------------
 *                    pv + pmt*(1+rate*type) / rate
 *
 * This output is then used in the log function.
 *
 * If rate equals zero, there is no time value of money calculations needed, and
 * the formula is: nper = (-fv - pv) / pmt
 *
 */
/**
 * Calculate the number of periods based on rate, payment, present value (as a
 * negative).
 *
 * @param rate - Interest rate per the period
 * @param pmt - Regular payment (must be equal in total value for all periods)
 * @param pv - Present value
 * @param fv - Future value
 * @param type - When payments are due. false = end of period (default). true =
 * beginning of period
 * @returns The number of periods
 */
var _default = (rate, pmt, pv, fv = 0, type = 0) => {
  if (rate === 0 && pmt === 0) throw new Error("Payment cannot be 0");
  if (rate === 0) return -(pv + fv) / pmt;
  const tmp = type !== 0 ? pmt * (1 + rate) / rate : pmt / rate;
  let tmpFV = -fv + tmp;
  let tmpPV = pv + tmp;
  // Test to ensure values fit within log() function
  if (tmpFV < 0 && tmpPV < 0) {
    tmpFV = tmpFV * -1;
    tmpPV = tmpPV * -1;
  } else if (tmpFV <= 0 || tmpPV <= 0) {
    throw new Error("Cannot calculate NPER");
  }
  const tmp2 = rate + 1;
  return (Math.log(tmpFV) - Math.log(tmpPV)) / Math.log(tmp2);
};
exports.default = _default;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _evalNpv = _interopRequireDefault(require("./evalNpv.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*
 * Math:
 *
 *        Value 1        Value 2             Value N
 * npv = ---------- + ------------- + ... -------------
 *       (1 + rate)   (1 + rate)^2         (1 + rate)^N
 */
/**
 * Calculate the net present value of a series of payments at a constant rate.
 *
 * @param rate - Interest rate per the period
 * @param values - A set of periodic cash flows
 * @returns The net present value
 */
var _default = (rate, ...values) => {
  const lowerBound = 0;
  const upperBound = values.length - 1;
  const tmp = upperBound - lowerBound + 1;
  if (tmp < 1) throw new Error("Invalid values");
  if (rate === -1) throw new Error("Invalid rate");
  return (0, _evalNpv.default)(rate, values, 0, lowerBound, upperBound);
};
exports.default = _default;

},{"./evalNpv.js":2}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*
 * Math:
 *
 *                                          (1+rate)^nper - 1
 *  pv * (1+rate)^nper + pmt*(1+rate*type)*------------------ + fv = 0
 *                                                rate
 * If rate equals zero:
 * pv + pmt*nper + fv = 0
 *
 *           (-fv - pv*(1+rate)^nper) * rate
 *  pmt = ---------------------------------------
 *         (1+rate*type) * ( (1+rate)^nper - 1 )
 *
 * If rate equals zero::
 *
 *  pmt = (-fv - pv) / nper
 */
/**
 * Calculates the value of the payment based on rate, periods, present value (as
 * a negative).
 *
 * @param rate - Interest rate per the period
 * @param nper - Number of periods
 * @param pv - Present value
 * @param fv - Future value
 * @param type - When payments are due. false = end of period (default). true =
 * beginning of period
 * @returns The value of the payment
 */
var _default = (rate, nper, pv, fv = 0, type = false) => {
  if (rate === 0) return (-fv - pv) / nper;
  const tmp = type ? 1 + rate : 1;
  const tmp2 = rate + 1;
  const tmp3 = Math.pow(tmp2, nper);
  return (-fv - pv * tmp3) / (tmp * (tmp3 - 1)) * rate;
};
exports.default = _default;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ipmt = _interopRequireDefault(require("./ipmt.js"));
var _pmt = _interopRequireDefault(require("./pmt.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*
 * Math:
 *
 * Since a regular payment is the essentially the interest payment plus the
 * principal payment:
 *
 * ppmt = pmt - ipmt
 */
/**
 * Calculates the portion of a regular payment that is applied to principal.
 *
 * @param rate - Interest rate per the period
 * @param per - Specific period
 * @param nper - Number of periods
 * @param pv - Present value
 * @param fv - Future value
 * @param type - When payments are due. false = end of period (default). true =
 * beginning of period
 * @returns The portion of a regular payment that is applied to the principal
 */
var _default = (rate, per, nper, pv, fv, type) => {
  if (per <= 0 || per >= nper + 1) throw new Error("Invalid period");
  const pmtx = (0, _pmt.default)(rate, nper, pv, fv, type);
  const tmpIPMT = (0, _ipmt.default)(rate, per, nper, pv, fv, type);
  return pmtx - tmpIPMT;
};
exports.default = _default;

},{"./ipmt.js":7,"./pmt.js":11}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*
 * Math:
 *
 *          -fv + pmt*(1_rate*type) / ( (1+rate)^nper-1) / rate
 *    pv = ------------------------------------------------------
 *                         (1 + rate) ^ nper
 *
 * If rate equals zero, there is no time value of money calculations needed, and
 * the function returns:
 *
 *    pv = -fv - pmt * nper
 */
/**
 * Calculates the present value based on rate, payment, and number of periods.
 *
 * @param rate - Interest rate per the period
 * @param nper - Number of periods
 * @param pmt - Regular payment (must be equal in total value for all periods)
 * @param fv - Future value
 * @param type - When payments are due. false = end of period (default). true =
 * beginning of period
 * @returns The present value
 */
var _default = (rate, nper, pmt, fv = 0, type = false) => {
  if (rate === 0) return -pmt * nper - fv;
  const tmp = type ? 1 + rate : 1;
  const tmp2 = 1 + rate;
  const tmp3 = Math.pow(tmp2, nper);
  return -(fv + pmt * tmp * ((tmp3 - 1) / rate)) / tmp3;
};
exports.default = _default;

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _evalRate = _interopRequireDefault(require("./evalRate.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*
 * Math:
 *
 * Use a guess to determine Rate0 and Rate1. Use the helper function evalRate to
 * determine Y0 and Y1 respectively.
 *
 *  Iterate through:
 *                                             Y0
 *   New Rate0 = Rate1 - (Rate1 - Rate0) * -----------
 *                                          (Y1 - Y0)
 *
 * Get new Y0. Move New Rate0 to Rate1 and repeat. Stop when the absolute value
 * of Y0 < epsilon max tolerance.
 */
/**
 * Calculates the estimated contract rate based on the number of periods, the
 * regular payment, and the present value.
 *
 * @remarks
 * Leverages a secant method of approximation using a guess (deafult 10%) as a
 * starting point
 *
 * @param nper - Number of periods
 * @param pmt - Regular payment (must be equal in total value for all periods)
 * @param pv - Present value
 * @param fv - Future value
 * @param type - When payments are due. false = end of period (default). true =
 * beginning of period
 * @param guess - A guess at the rate
 * @returns The estimated contract rate
 */
var _default = (nper, pmt, pv, fv = 0, type = 0, guess = 0.1) => {
  if (nper <= 0) throw new Error("Invalid period");
  // Variables for epsilon max and step from Microsoft reference docs.
  const epslMax = 0.0000001;
  const step = 0.00001;
  // Microsoft reference docs show 40 iterations but that few iterations cause
  // undefined errors when the guess is far off the actual rate. Increasing the
  // iterations to 129 allows enough iterations to get rates within 8 decimal
  // places of Excel.
  const iterMax = 128;
  let Rate0 = guess;
  let Y0 = (0, _evalRate.default)(Rate0, nper, pmt, pv, fv, type);
  let Rate1 = Y0 > 0 ? Rate0 / 2 : Rate0 * 2;
  let Y1 = (0, _evalRate.default)(Rate1, nper, pmt, pv, fv, type);
  let i = 0;
  while (i < iterMax) {
    if (Y1 === Y0) {
      Rate0 = Rate0 < Rate1 ? Rate0 - step : Rate0 - step * -1;
      Y0 = (0, _evalRate.default)(Rate0, nper, pmt, pv, fv, type);
    }
    if (Y1 === Y0) throw new Error("Cannot calculate RATE");
    Rate0 = Rate1 - (Rate1 - Rate0) * Y1 / (Y1 - Y0);
    Y0 = (0, _evalRate.default)(Rate0, nper, pmt, pv, fv, type);
    if (Math.abs(Y0) < epslMax) {
      return Rate0;
    } else {
      let tmp = Y0;
      Y0 = Y1;
      Y1 = tmp;
      tmp = Rate0;
      Rate0 = Rate1;
      Rate1 = tmp;
    }
    i++;
  }
};
exports.default = _default;

},{"./evalRate.js":3}]},{},[1]);
