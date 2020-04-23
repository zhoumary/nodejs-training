/*
	
s是一个字符串

正常情况下 s的格式为 ID-NAME[USERNAME]:{DATE} (字符串不会含有空格换行符等)
例如 1-Alice,[ALICE1]:{20202020}

异常情况下 s的格式任意

请将字符串结构化并返回一个object
其中包含属性
id: number 无需前缀0
name: string
username: string 
date: string

例如
return {
    id: 1,
    name: "Alice",
    username: "ALICE1",
    date: "20202020"
}

异常情况下，各字段请设置为null，并依然返回object

*/


/**
 * @param s {string}
 * @returns {{id:number,name:string,username:string,date:string}}
 */
module.exports = function parse(s) {
    const sObj = {
        id: null,
        name: null,
        username: null,
        date: null
    };

    // parse s
    const sSplitter = s.split(/-|,|:/g);


    if (isNaN(sSplitter[0])) {
        sObj.id = null;
    } else {
        sObj.id = parseInt(sSplitter[0]);
    }

    if (!sSplitter[1]) {
        sObj.name = null;
    } else {
        sObj.name = sSplitter[1];
    }

    if (!sSplitter[2]) {
        sObj.username = null;
    } else {
        sObj.username = sSplitter[2].replace('[', '').replace(']', '');
    }

    if (!sSplitter[3]) {
        sObj.date = null;
    } else {
        sObj.date = sSplitter[3];
    }


    return sObj;
};
