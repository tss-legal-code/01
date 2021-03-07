// С помощью встроенной браузерной функции prompt поочерёдно ввести два значения. Если первое значение некорректно приводится к числу, вывести в консоли сообщение: "Некорректный ввод!" и завершить программу. Если первое значение корректно приводится к числу, а второе нет - вывести такое же сообщение об ошибке и завершить программу. Если оба значения корректно приводятся к числу, то вывести в консоль результат в виде: "Ответ: [сумма двух чисел], [частное двух чисел]."
// > Примеры:
// Вводим 10 и 2, получаем "Ответ: 12, 5."
// Вводим 872 и 8, получаем "Ответ: 880, 109."
// Вводим 'abc', получаем "Некорректный ввод!"

// function calcSumQuotient() {
//     let num1 = prompt("Введите ПЕРВОЕ число")
//     if (isInputWrong(num1)) {
//         return
//     }
//     let num2 = prompt("Введите ВТОРОЕ число")
//     if (isInputWrong(num2)) {
//         return
//     }
//     console.log(`Ответ: ${+num1 + +num2}, ${+num1 / +num2}.`)
//
// }
// function isInputWrong(input) {
//     if (isNaN(input) || input === null || input === "") {
//         console.log("Некорректный ввод!")
//         return true
//     }
// }

let isInputOk = true

let num1 = getInput("Введите ПЕРВОЕ число")
let num2 = getInput("Введите ВТОРОЕ число")

function getInput(request) {
    if (isInputOk == true) {
        let tmp = prompt(request)
        if (isNaN(tmp) || tmp === null || tmp === "") {
            console.log("Некорректный ввод!" + " " + tmp)
            isInputOk = false
            return tmp
        } else {
            return tmp

        }
    }
}

if (isInputOk == true) {
    console.log(`Ответ: ${+num1 + +num2}, ${+num1 / +num2}.`)
}

// SERHII TARABANCHUK
