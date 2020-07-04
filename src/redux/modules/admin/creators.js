/*
* @Author: 王宸
* @Date:   2019-12-28 15:44:24
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-04 20:57:40
*/

import * as types from '@redux/types'

export const userDemo = (payload) => ({
	type: types.ADMIN_DEMO,
	payload 
});

export const userDemoSaga = (payload) => ({
	type: types.ADMIN_DEMO_SAGA,
	payload 
});