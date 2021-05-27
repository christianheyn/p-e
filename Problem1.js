const getSumOfMultiples = (n, max) => {
    const belowMax = max - 1;
    const maxMultiple = (belowMax - (belowMax % n));
    const multiplesLength = maxMultiple / n;

    return (maxMultiple + n) * (multiplesLength / 2);
}

const all3Multiples = getSumOfMultiples(3, 1000);
const all5Multiples = getSumOfMultiples(5, 1000);
const all3And5Multiples = getSumOfMultiples(5 * 3, 1000);

const result = all3Multiples + all5Multiples - all3And5Multiples;

console.log(result);