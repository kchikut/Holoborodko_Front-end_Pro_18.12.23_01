function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }
    if (degree < 0) {
        return 1 / pow(num, -degree);
    }
    return num * pow(num, degree - 1);
}

const baseInput = prompt("Введіть число:");
if (baseInput === null || baseInput.trim() === "" || isNaN(baseInput)) {
    alert("Помилка. Введіть значення для числа.");
}
else {
    const exponentInput = prompt("Введіть ступінь:");
    if (exponentInput === null || exponentInput.trim() === "" || !Number.isInteger(+exponentInput) || isNaN(exponentInput)) {
        alert("Помилка. Введіть значення для ступеня.");
    } else {
        const base = Number(baseInput);
        const exponent = Number(exponentInput);
        const result = pow(base, exponent);
        if (typeof result === "number") {
            alert(`Результат: ${result}`);
        } else {
            alert(`Помилка: ${result}`);
        }
    }
}