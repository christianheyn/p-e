const fibEvenSum = (x, y, max, acc) => {
    if (x > max || y > max) {
        return acc;
    }
    const next = x + y;
    const nextAcc = (y % 2 === 0) ? acc + y : acc;
    return fibEvenSum(y, next, max, nextAcc);
};

const result = fibEvenSum(1, 2, 4000000, 0);

console.log(result);
