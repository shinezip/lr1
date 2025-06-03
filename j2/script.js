// Основная часть: кратные 5 от 0 до введённого числа
let number;

do {
  number = prompt("Введите целое число:");
} while (!Number.isInteger(Number(number)));

number = Number(number);

const multiplesOfFive = [];

for (let i = 0; i <= number; i++) {
  if (i % 5 === 0) {
    multiplesOfFive.push(i);
  }
}

if (multiplesOfFive.length > 0) {
  console.log("Числа, кратные 5:", multiplesOfFive.join(", "));
} else {
  console.log("Sorry, no numbers");
}

// Продвинутая часть: вывод простых чисел в диапазоне m..n
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let m, n;

while (true) {
  m = prompt("Введите первое целое число для диапазона:");
  n = prompt("Введите второе целое число для диапазона:");

  if (Number.isInteger(Number(m)) && Number.isInteger(Number(n))) {
    m = Number(m);
    n = Number(n);
    break;
  } else {
    alert("Ошибка! Нужно ввести два целых числа.");
  }
}

const [min, max] = m < n ? [m, n] : [n, m];
const primes = [];

for (let i = min; i <= max; i++) {
  if (isPrime(i)) primes.push(i);
}

console.log(`Простые числа от ${min} до ${max}:`, primes.join(", "));
