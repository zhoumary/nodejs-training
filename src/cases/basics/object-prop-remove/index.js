/*
	
从object中移除对应属性

input       output

{a:1},'a'   {}
{a:1},'b'   {a:1}

*/


module.exports = (obj, propName) => {
    if (!obj || !propName) {
        return undefined;
    } else if (obj && propName) {
        delete obj[propName];
        return obj;
    }
};
