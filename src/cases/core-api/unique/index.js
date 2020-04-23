/*
	
arr1是一个Array, 其中包含任意多元素 (15 <= length <= 1000), 元素的类型不定

请返回arr1中的唯一值

如 arr1 = [1, "1", NaN, 1], 返回值应为[1, "1", NaN]

返回数组元素顺序任意


*/


/**
 * @param arr1 {Array<any>}
 */
module.exports = function unique(arr1) {
  if (arr1.length == 0) return [];

  const arr1Set = new Set(arr1);
  return Array.from(arr1Set);
};
