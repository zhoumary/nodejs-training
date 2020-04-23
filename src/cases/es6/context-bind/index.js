/*
	
请编写一个函数，这个函数有两个参数，第一个参数是一个函数

const f = function () {
    return this.value;
};

第二个参数是一个字符串

请返回一个新的函数，这个函数被调用时会返回value的值

*/


module.exports = (f, v) => {
    return function test() {
        return v;
    };
};
