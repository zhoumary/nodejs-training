/*
	
请编写并返回一个EventEmitter instance

该emitter需要响应wow事件, 并将第一个参数传入cb中

例如
emitter.emit("wow", "123123") // => exec cb("123123")


*/
const eventEmitter = require('events').EventEmitter;

module.exports = (cb) => {
    const emitter = new eventEmitter();

    // eslint-disable-next-line no-unused-vars
    const wow = (args) => {
        cb(args);
    };

    emitter.on('wow', wow);

    return emitter;
};
