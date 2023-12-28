function pow(num, degree) {
    if (isNaN(num) || isNaN(degree)) {
        return "Дані введено некоректно, спробуйте ще раз";
    }
    if (degree === 0) {
        return 1;
    }
    if (degree < 0) {
        return 1 / pow(num, -degree);
    }
    return num * pow(num, degree - 1);
}

let baseInput = prompt("Введіть число:");
let exponentInput = prompt("Введіть ступінь:");
if (baseInput.trim() === "" || exponentInput.trim() === "" || !Number.isInteger(+exponentInput)) {
    alert("Помилка. Введіть значення для числа і ступеню.");
}
else {
    let base = parseFloat(baseInput);
    let exponent = parseFloat(exponentInput);
    let result = pow(base, exponent);
    if (typeof result === "number") {
        alert(`Результат: ${result}`);
    } else {
        alert(`Помилка: ${result}`);
    }
}