/*
* @Author: wangchen
* @Date:   2020-07-07 18:12:40
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-07 18:24:42
*/
import * as types from '@redux/types'

// >>> reducer
export const seckillListModify = (payload) => ({
	type: types.SECKILL_LIST_MODIFY,
	payload 
});


// >>> saga

export const seckillListQuery = (payload) => ({
	type: types.SECKILL_LIST_QUERY,
	payload 
});