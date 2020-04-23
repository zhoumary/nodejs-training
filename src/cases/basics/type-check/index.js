/*
	
check the input parameter type

input   output

1       'number'
'2'     'string'
null    'null'
NaN     'NaN'
[]      'array'
{}      'object'

*/


module.exports = (v1) => {
    const t = typeof v1;
    console.log(t);
    if (t == 'number' || t == 'string' || t == 'object') {
        if (v1 == null) {
            return 'null';
        }
        if (isNaN(v1) && t == 'number') {
            return 'NaN';
        }
        if (Array.isArray(v1)) {
            return 'array';
        }

        return t;
    }
};
