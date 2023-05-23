let number = 10; // Замените на ваш порядковый номер в журнале

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("Простые числа до", number, ":");

for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
