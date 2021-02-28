const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort((a, b) => b - a).filter((n) => {return n < 19;}).map((n) => { return (n*1.5) - 1; }).reduce((curr, next) => curr += next));
