const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const md5 = (s) => {
    let md5 = crypto.createHash('md5');
    return md5.update(s).digest('hex');
};

/**
 * format/get a local temp file link by remote link
 * 
 * @param {string} s specs remote link
 */
const tempLink = (s) => {
    return path.join(__dirname, '../../dist', `${md5(s)}.js`);
};

const createEmptyTestCase = (group, title, description, template = 'module.exports = function () { };') => {
    mkdirp.sync(path.join(__dirname, '../cases', group, title));
    fs.writeFileSync(path.join(__dirname, '../cases', group, title, 'index.js'), `/*\n\t${description}\n*/\n\n${template}`, { encoding: 'UTF-8' });
};


module.exports = {
    createEmptyTestCase, md5, tempLink
};