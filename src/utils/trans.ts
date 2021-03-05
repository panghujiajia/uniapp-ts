/**
 * 除法函数，用来得到精确的除法结果
 * 说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
 * @param {*} arg1 被除数
 * @param {*} arg2 除数
 */
export const accDiv = (arg1: number, arg2: number) => {
	let [t1, t2, r1, r2] = [0, 0, 0, 0];
	try {
		t1 = arg1.toString().split('.')[1].length;
	} catch (e) {}
	try {
		t2 = arg2.toString().split('.')[1].length;
	} catch (e) {}
	r1 = Number(arg1.toString().replace('.', ''));
	r2 = Number(arg2.toString().replace('.', ''));
	return (r1 / r2) * Math.pow(10, t2 - t1);
};

/**
 * 乘法函数，用来得到精确的乘法结果
 * 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 * @param {*} arg1 因数
 * @param {*} arg2 因数
 */
export const accMul = (arg1: number, arg2: number) => {
	// tslint:disable-next-line: prefer-const
	let [m, s1, s2] = [0, arg1.toString(), arg2.toString()];
	try {
		m += s1.split('.')[1].length;
	} catch (e) {}
	try {
		m += s2.split('.')[1].length;
	} catch (e) {}
	return (
		(Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
		Math.pow(10, m)
	);
};

/**
 * 元转分
 * @param {*} m 价格（元）
 */
export const transY2F = (m: any) => {
	// 乘法 元转分
	return accMul(parseFloat(m), 100);
};

/**
 * 分转元
 * @param {*} m 价格分
 */
export const transF2Y = (m: any) => {
	if (!m) {
		return '0.00';
	}
	return formatDecimal(accDiv(parseFloat(m), 100), 2);
};

// 保留小数 银行家算法
const formatDecimal = (num: string | number, decimal: number) => {
	num = num.toString();
	const index = num.indexOf('.');
	if (index !== -1) {
		num = num.substring(0, decimal + index + 1);
	} else {
		num = num.substring(0);
	}
	return parseFloat(num).toFixed(decimal);
};

/**
 * 精确加法
 */
export const accAdd = (a: number, b: number) => {
	let [c, d, e] = [0, 0, 0];
	try {
		c = a.toString().split('.')[1].length;
	} catch (f) {
		c = 0;
	}
	try {
		d = b.toString().split('.')[1].length;
	} catch (f) {
		d = 0;
	}
	return (
		(e = Math.pow(10, Math.max(c, d))), (accMul(a, e) + accMul(b, e)) / e
	);
};
/**
 * 精确减法
 */
export const accSub = (a: number, b: number) => {
	let [c, d, e] = [0, 0, 0];
	try {
		c = a.toString().split('.')[1].length;
	} catch (f) {
		c = 0;
	}
	try {
		d = b.toString().split('.')[1].length;
	} catch (f) {
		d = 0;
	}
	return (
		(e = Math.pow(10, Math.max(c, d))), (accMul(a, e) - accMul(b, e)) / e
	);
};

/**
 * 保留两位小数
 * @param {*} x
 */
export const toDecimal2 = (x: any) => {
	let f = parseFloat(x);
	if (isNaN(f)) {
		return false;
	}
	f = Math.round(x * 100) / 100;
	let s = f.toString();
	let rs = s.indexOf('.');
	if (rs < 0) {
		rs = s.length;
		s += '.';
	}
	while (s.length <= rs + 2) {
		s += '0';
	}
	return s;
};
