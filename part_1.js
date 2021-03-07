let num = prompt("Введите 1-ое значение (для конвертации)")
let base = prompt("Введите 2-ое значение (новая система счисления)")
if (isNaN(num) || num === null || num === "" ||
    isNaN(base) || base === null || base === "") {
    console.log("Некорректный ввод!")
} else {
    console.log(Number(num).toString(base))
}
// SERHII TARABANCHUK
