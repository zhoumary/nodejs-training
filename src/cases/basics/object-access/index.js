/*
	
访问object中的属性

input       output

{a:1},'a'   1
{a:1},'b'   null    // not undefined

*/


module.exports = (obj, propName) => {
    if (!obj && !propName) {
        return;
    } else if (obj && propName) {
        if (typeof (obj[propName]) === 'undefined') {
            return null;
        } else {
            return obj[propName];
        }
    }
};
