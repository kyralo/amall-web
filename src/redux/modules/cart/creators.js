/*
* @Author: wangchen
* @Date:   2020-07-23 20:36:41
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-23 20:45:30
*/
import * as types from '@redux/types'

export const checkGoods = (payload) => ({
	type: types.CHECK_GOODS,
	payload 
});

export const changeGoodsNum = (payload) => ({
	type: types.CHANGE_GOODS_NUM,
	payload 
});

export const checkAllGoods = (payload) => ({
	type: types.CHECK_ALL_GOODS,
	payload 
});