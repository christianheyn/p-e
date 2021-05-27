const go = (x, p, max, acc) => {
    if (p >= max) return acc;

    if (x % p === 0) {
        const factor = x / p;
        const q = go(factor, 2, factor, factor);
        const newAcc = (q > p) ? q : p;

        return go(
            x,
            factor + 1,
            x / factor,
            newAcc
        );
    }

    return go(x, p + 1, x / p, acc)
}
const getLargestPrimFactorOf = (x) => go(x, 2, x, 0)

const result = getLargestPrimFactorOf(600851475143)

console.log(result);
