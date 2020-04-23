/*
	
fibonacci array function

f(1) = f(2) = 1; for n > 2, f(n) = f(n - 1) + f(n - 2)
1, 1, 2, 3, 5, 8, 13 ...., 

input       output

0           0
1           1
2           1
3           2
4           3

*/


module.exports = (index) => {
    const fiboArr = [];
    fiboArr[0] = 0;
    fiboArr[1] = 1;
    fiboArr[2] = 1;

    for (let count = 3; count < index; count++) {
        fiboArr[count] = fiboArr[count - 1] + fiboArr[count - 2];
    }

    let fiboTotal = 0;
    if (index <= 0) {
        return fiboTotal;
    } else {
        for (let count = 0; count < (index - 1); count++) {
            fiboTotal = fiboTotal + fiboArr[count];
        }
        return fiboTotal + 1;
    }

};
