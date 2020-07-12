/*
* @Author: wangchen
* @Date:   2020-07-04 20:55:27
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-07 18:16:39
*/

import * as types from '@redux/types'

export const tokenModify = (payload) => ({
	type: types.TOKEN_MODIFY,
	payload 
});

export const platformChange = (payload) => ({
	type: types.PLATFORM_CHANGE,
	payload 
});