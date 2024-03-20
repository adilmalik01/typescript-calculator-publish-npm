export const calculate = (num1, operator, num2) => {
    let clutter;
    if (operator === "Addition") {
        clutter = num1 + num2;
    }
    else if (operator === "Subtraction") {
        clutter = num1 - num2;
    }
    else if (operator === "Divide") {
        clutter = num1 / num2;
    }
    else if (operator === "Multiply") {
        clutter = num1 * num2;
    }
    else if (operator === "Modulus") {
        clutter = num1 % num2;
    }
    return clutter;
};
