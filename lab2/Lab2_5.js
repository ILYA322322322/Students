let surname = "Smith"; // Замените на вашу фамилию

function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, ""); // Приведение к нижнему регистру и удаление пробелов
    return str === str.split("").reverse().join("");
}

if (isPalindrome(surname)) {
    console.log("Ваша фамилия является палиндромом!");
} else {
    console.log("Ваша фамилия не является палиндромом.");
}
