/*
	
f1, f2, cb 是不同的函数
f1, f2调用时会返回Promise
f1没有参数, f2有一个参数

请先调用f1, 获取f1 resolve的返回值，然后调用f2并传入该返回值

最后将f2 resolve的值传入cb中

不需要进行异常处理

*/


module.exports = (f1, f2, cb) => {
    const f1Promise = f1();

    f1Promise.then((value) => {
        const f2Promise = f2(value);
        f2Promise.then(cb(value));
    });
};
