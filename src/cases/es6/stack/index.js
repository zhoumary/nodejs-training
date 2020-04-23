/*
	
请创建一个类，含有如下方法

* push    入栈
* pop     出栈， 当没有元素时返回null
* size    栈大小

可以借由Array完成这个类
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array


*/


module.exports = class Stack {
    constructor() {
        this.arr = [];
    }

    push(element) {
        this.arr.push(element);
    }

    pop() {
        if (this.arr.length == 0)
            return null;
        return this.arr.pop();
    }

    size() {
        return this.arr.length;
    }
};
