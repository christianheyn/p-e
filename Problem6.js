function sumOfSquares (acc, n, max) {
    if (n > max) {
        return acc;
    }

    return sumOfSquares(
        acc + (n * n),
        n + 1,
        max
    );
}
const kleinerGauss = n => (n + 1) * (n / 2)

const go = (n) => {
    const x = sumOfSquares(0, 1, n);
    const y = kleinerGauss(n);

    return (y * y) - x;
};

const result = go(100)

console.log(result);
