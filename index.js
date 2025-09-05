let result;

let button1 = document.querySelector('button');
button1.addEventListener('click', calculate);

result = document.createElement('div');
result.id = 'result';
result.textContent = "Ready for result...";
document.getElementById('Calculator').appendChild(result); 


function calculate() {
    let input1 = parseFloat(document.getElementById('num1').value);
    let input2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator');
    let operationSelected = operator.options[operator.selectedIndex].value;
    console.log(operationSelected);
    let output;
    switch (operationSelected) {
        case 'addition':
            output = input1 + input2;
            break;
        case 'subtraction':
            output = input1 - input2;
            break;
        case 'multiplication':
            output = input1 * input2;
            break;
        case 'division':
            output = input2 !== 0 ? input1 / input2 : 'Error: divide by 0';
            break;
        default:
            output = 'Choose an operation';
    }

    result.textContent = `Result: ${output}`;
}

