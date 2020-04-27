/*
	
请编写一个函数, 动态的将src/cases/core-api中的所有modules加载到一个数组中并返回


可能使用到的API:

https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fspromises_readdir_path_options

以及path.join


*/

const fs = require('fs').promises;
const path = require('path');

module.exports = async () => {
    let apiFolder = path.join(__dirname, '../../', 'core-api');
    const folders = await fs.readdir(apiFolder);
    return folders.map(folder => {
        return require(path.join(apiFolder, folder));
    });
};
