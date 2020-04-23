/*
	
编写一段逻辑，读取Map m中的所有value
Map m的key皆为number
Map m的value皆为string，格式如'Qtrv Nutesxgya Gblpmjv Yjwiti Xiosjw', 只会包含字母及空格, 该value的有五个单词

请统计Map m中所有value中的单词数目总和
并将该总和的值通过key "__total__" 填入Map m中

最后返回原Map m

*/


/**
 * @param m {Map<any, string>}
 */
module.exports = function mapReadWrite(m) {
  const mValues = m.values();
  let vocabulariesLen = 0;
  for (const v of mValues) {
    if (!v) return;
    const vLen = v.split(' ').length;
    vocabulariesLen = vocabulariesLen + vLen;
  }
  m.set('__total__', vocabulariesLen);

  return m;
};
