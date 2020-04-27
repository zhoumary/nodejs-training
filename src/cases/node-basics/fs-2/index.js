/*
	
请读取系统临时路径下的fs-2-test-file.json文件, 其文件内容必然为JSON格式文本, 格式如下

{
    "host": "a.b.c",
    "port": 22233
}

请返回一个字符串, 格式为 host:port

可能使用到的API:
require或者fs
JSON.parse


*/


const fs = require('fs').promises;
const path = require('path');
const os = require('os');


module.exports = async () => {
    const tmpDir = os.tmpdir();
    const filePath = path.join(tmpDir, './fs-2-test-file.json');
    // return filePath;

    const c = await fs.readFile(filePath, { encoding: 'UTF-8' });
    // .then(value => {
    //     console.log(value);
    //     if (value) {
    //         const jsonData = JSON.parse(value);
    //         const hostData = jsonData.host;
    //         const portData = jsonData.port;
    //         const finalData = hostData + ':' + portData.toString();
    //         return finalData;
    //     }
    // });

    // console.log(c);
    if (c) {
        const jsonData = JSON.parse(c);
        const hostData = jsonData.host;
        const portData = jsonData.port;
        const finalData = hostData + ':' + portData;
        // console.log(finalData);
        return finalData;
    }

};
