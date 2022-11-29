const numbers = document.getElementsByClassName('button');
const input = document.getElementById("input");
const result = document.getElementById("result");

for (let number of numbers) {
    number.addEventListener('click', function () {
        input.innerHTML += this.value;
    });
}

function equal() {
    let numDisplay = input.innerHTML;
    let output = eval(numDisplay);
    result.innerHTML = output;
}


function clean() {
    input.innerHTML = " ";
    result.innerHTML = "0";
}

function undo() {
    let numDisplay = input.innerHTML;
    input.innerHTML = numDisplay.substring(0, numDisplay.length - 1);
}
