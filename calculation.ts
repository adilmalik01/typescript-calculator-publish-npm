
export const calculate: any = (num1: number, operator: string, num2: number): any => {
    let clutter: any;
    if (operator === "Addition") {
        clutter = num1 + num2

    } else if (operator === "Subtraction") {
        clutter = num1 - num2

    } else if (operator === "Divide") {
        clutter = num1 / num2

    } else if (operator === "Multiply") {
        clutter = num1 * num2

    } else if (operator === "Modulus") {
        clutter = num1 % num2
    }

    return clutter;
}

