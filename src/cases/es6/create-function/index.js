/*
	
创建一个函数，这个函数被调用时，可能会传入1-100个参数，这个函数的返回值是所有参数的和

input           output
fSum(1,2,3)     6
fSum(2,3)       5

*/


module.exports = () => {
    return function fSum() {
        const allArgs = arguments;

        if (allArgs.length > 0) {
            let argsTotal = 0;
            for (let index = 0; index < allArgs.length; index++) {
                argsTotal = argsTotal + allArgs[index];
            }
            return argsTotal;
        } else {
            return 0;
        }
    };
};
