let nums = {
    1: "",
    2: "",
}

for (x in nums) {
    nums[x] = prompt("Введите " + x + "-ое значение")
    if (isNaN(nums[x]) || nums[x] === "" || nums[x] === null) {
        console.log("Некорректный ввод!")
        break
    }
    if (x == 2) {
        console.log("Ответ: " + (+nums[1] + +nums[2]) + ", " + (+nums[1] / +nums[2]) + ".")
    }
}
