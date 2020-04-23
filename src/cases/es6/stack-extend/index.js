/*
	
(请先完成训练 - stack)

创建一个类LimitedStack, 继承于Stack类

构造器含有一个参数limit (10 < limit < 1000)

当push item时，如果stack的大小 大于等于 limit的值，请抛出任意异常

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/throw


*/
const Stack = require('../stack');

module.exports = class LimitedStack extends Stack {
    constructor(limit) {
        super();
        this.limit = limit;
    }

    push(element) {

        if (super.size() >= this.limit) {
            throw 'The stack length is greater equal than limit!';
        }
        super.push(element);
    }
};
