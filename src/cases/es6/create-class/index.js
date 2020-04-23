/*
	
创建一个类
有两个属性(name, size), 构造函数有一个参数name, size的值为name的长度
有两个方法
* setName 设置name的值
* getSize 获取name的长度

请注意size属性必须存在于instance上并可以直接访问

*/


module.exports = class Test {
    constructor(name) {
        this.name = name;
        this.size = name.length;
    }

    setName(name) {
        this.name = name;
        this.size = name.length;
    }

    getSize() {
        return this.size;
    }
};
