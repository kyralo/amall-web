/*
* @Author: kyralo
* @Date:   2020-08-16 17:02:56
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-16 17:09:31
*/
export const emailVerify = value => {
	return !/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/.test(value);
}