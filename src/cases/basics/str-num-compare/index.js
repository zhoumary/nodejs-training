/*
	
is less than

input       output

1,2         true
'1','2'     true
'1','1'     false
'1',-1      false

*/


/**
 * @param v1 {number|string}
 * @param v2 {number|string}
 */
module.exports = (v1, v2) => {
    if (isNaN(v1) == true || isNaN(v2) == true) {
        return false;
    } else {
        const result = parseInt(v1) - parseInt(v2);
        if (result < 0) {
            return true;
        } else if (result > 0) {
            return false;
        }
    }

};
