/*
	
请编写一个异步函数, 这个函数会传入一个emitter

请让这个emitter监听多个事件

* data: (string) => void
* end: () => void

当emitter接收到end事件时, 请将之前接收到的data数组按顺序返回(resolve)


*/


module.exports = async (emitter) => {
    let stringData = [];
    return new Promise((resolve) => {

        emitter.on('data', (stringValue) => {
            stringData.push(stringValue);
        });

        emitter.on('end', () => {
            resolve(stringData);
        });
    });

};
