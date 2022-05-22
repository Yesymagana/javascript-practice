// const input = document.querySelector('input');
// const input2 = document.querySelector('input:nth-child(3)');
// console.log(input);
// console.log(input2);

const input = document.querySelectorAll('input'); // all of the inputs from html
const p = document.querySelector('p'); // the first paragraph from html

const subTotal = inputs[0]; // the first input from html
const tipPercentage = inputs[1]; // the second input from html
const total = inputs[2]; // the third input from html
const partySize = inputs[3]; // the fourth input from html

subTotal.addEventListener('input'), function() { // listen for the user to input something
    calculateTotal();
}
tipPercentage.addEventListener('input'), function(){ // listen for the user to input something
    calculateTotal();
}
partySize.addEventListener('input'), function() { 
    showResult();
}

function calculateTotal() {
    let currentTotal = Number(subTotal.value); // convert the input value to a number
    let tip = currentTotal * (Number(tipPercentage.value) / 100); // calculate the tip
    total.value = currentTotal + tip; // add the tip to the total
}
function showResult() {
    p.innerHTML = 'each person pays: ' + total.value / (Number(partySize.value));
}

inputs[5].addEventListener('input', function() {
    document.body.style.backgroundColor = input[5].value;
})
