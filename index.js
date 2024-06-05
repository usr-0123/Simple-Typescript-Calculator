"use strict";
const q1 = document.getElementById('q1');
const q2 = document.querySelector("#q2");
const btn = document.querySelector("#add");
const answer = document.querySelector("#answer");
const option = document.querySelector("#option");
btn.textContent == option.value;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    let soln;
    if (a > b) {
        soln = a - b;
    }
    else {
        soln = b - a;
    }
    return soln;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
btn.addEventListener('click', () => {
    let soln;
    if (option.value == 'addition') {
        soln = add(+q1.value, +q2.value);
    }
    if (option.value == 'subtraction') {
        soln = subtract(+q1.value, +q2.value);
    }
    if (option.value == 'multiplication') {
        soln = multiply(+q1.value, +q2.value);
    }
    if (option.value == 'divition') {
        soln = divide(+q1.value, +q2.value);
    }
    answer.textContent = `The ${option.value} of ${q1.value} and ${q2.value} is ${soln}`;
});
