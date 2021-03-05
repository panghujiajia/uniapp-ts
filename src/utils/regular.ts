/**
 *
 * 检测表情字符
 * @export
 * @param {string} content
 * @returns
 */
export const haveEmoji = (content: string): boolean => {
	return /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g.test(content);
};

/**
 *
 * 检测是否含有特殊字符
 * @export
 * @param {string} content
 * @returns {boolean}
 */
export const haveSpecial = (content: string): boolean => {
	const regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
	const regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
	if (regEn.test(content) || regCn.test(content)) {
		return true;
	}
	return false;
};

/**
 * 检测中文汉字
 * @export
 * @param {string} content
 * @returns {boolean}
 */
export const testChinese = (content: string): boolean => {
	return /^[\u4e00-\u9fa5]{1,}$/g.test(content);
};

/**
 * 检测手机号合法性
 * @export
 * @param {string} content
 * @returns {boolean}
 */
export const testPhone = (content: string): boolean => {
	return /^1[3|4|5|7|8][0-9]{9}$/g.test(content);
};
