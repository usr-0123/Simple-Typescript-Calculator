const q1 = document.getElementById('q1')! as HTMLInputElement
const q2 = document.querySelector("#q2")! as HTMLInputElement
const btn = document.querySelector("#add")! as HTMLButtonElement
const answer = document.querySelector("#answer")! as HTMLParagraphElement
const option = document.querySelector("#option")! as HTMLSelectElement

btn.textContent == option.value;

function add(a:number, b:number) {
    return a+b;
}

function subtract(a:number, b:number) {
    let soln

    if (a>b) {
        soln = a-b;
    } else {
        soln = b-a;
    }

    return soln
}

function multiply(a:number, b:number) {
    return a*b;
}

function divide(a:number, b:number) {
    return a/b;
}

btn.addEventListener('click', () => {
    let soln

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

    answer.textContent = `The ${option.value} of ${q1.value} and ${q2.value} is ${soln}`
})
