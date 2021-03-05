/**
 * 从url中取对应的参数
 * @param url 取参数的url
 * @param name 要取的参数名
 */
export const getQueryParams = (url: string, name: string) => {
	if (url.indexOf('?') > -1) {
		const params = url.split('?')[1];
		const reg = new RegExp('(^|&|;)' + name + '=([^&|;]*)(&|;|$)', 'i');
		const result = params.match(reg);
		if (result !== null) {
			return result[2];
		}
	}
	return null;
};

// 手机号脱敏
export const mobileEncrypt = (val: string): string => {
	if (!val) return '';
	return val.replace(/(\d{3})\d*(\d{4})/, '$1****$2');
};

// 身份证脱敏
export const idEncrypt = (val: string): string => {
	if (!val) return '';
	return val.replace(/(\w{6})\w*(\w{3})/, '$1*******$2');
};
