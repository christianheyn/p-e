const sumOfSquares = (n) => ((2 * n) + 1) * (n + 1) * n / 6;
const kleinerGauss = (n) => (n + 1) * (n / 2)

const go = (n) => {
    const x = sumOfSquares(n);
    const y = kleinerGauss(n);

    return (y * y) - x;
};

const result = go(100)

console.log(result);
