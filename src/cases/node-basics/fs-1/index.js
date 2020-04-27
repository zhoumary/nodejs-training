/*
	
请读取系统临时路径下的fs-1-test-file文件, 并以UTF-8格式编码返回文件内容字符串

可能用到的API

os.tmpdir
path.join
fs.readFile


*/


const fs = require('fs').promises;
const path = require('path');
const os = require('os');


module.exports = async () => {
    const tmpDir = os.tmpdir();

    return fs.readFile(path.join(tmpDir, './fs-1-test-file'), { encoding: 'UTF-8' });

};
