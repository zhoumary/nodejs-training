/*
	
使用给定格式对日期进行格式化

d是一个Date对象, f是一个字符串
f中可能包含的占位符:

yyyy, year
MM, month, 1,2,3,4, .... 12
dd, day of month, 1 .... 30 (31)

例如:
const d = new Date("2020-01-01")
const f = 'dd-dd-dd-yyyy'

formatDate(d, f) // 01-01-01-2020

please ref: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date


*/


/**
 * @param d {Date}
 * @param f {string}
 * @returns {string}
 */
module.exports = function formatDate(d, f) {


    const dYear = `${d.getFullYear()}`;

    const dRealMonth = d.getMonth() + 1;
    const dLocalMonth = d.getUTCMonth() + 1;
    let dMonth = `${dRealMonth}`;

    const dLocalDate = d.getUTCDate();
    let dDate = `${dLocalDate}`;

    const dLocalHours = d.getHours();
    const dHours = d.getUTCHours();
    if ((dLocalHours - dHours) < 0) {
        if (dRealMonth == dLocalMonth) {
            dDate = `${dLocalDate + 1}`;
        } else {
            dDate = `${1}`;
        }
    }



    // parse f    
    if (f) {
        // return localDate;
        return f.replace(/yyyy/g, dYear).replace(/MM/g, dMonth).replace(/dd/g, dDate);
    } else {
        return '';
    }
};
