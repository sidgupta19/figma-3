function backSpace() {
    document.calc.txt.value = document.calc.txt.value.slice(0, -1);
}

function addDecimal() {
    if (!document.calc.txt.value.includes('.')) {
        document.calc.txt.value += '.';
    }
}

function addOperator(operator) {
    const lastChar = document.calc.txt.value.slice(-1);
    const operators = ['+', '-', '/', '*'];
    if (!operators.includes(lastChar)) {
        document.calc.txt.value += operator;
    }
}