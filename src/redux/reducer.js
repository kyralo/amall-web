/*
* @Author: 王宸
* @Date:   2019-12-28 15:46:49
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-07 18:24:06
*/

import { combineReducers } from 'redux';

import user from '@store/user';
import admin from '@store/admin';
import common from '@store/common';
import seckill from '@store/seckill';

// 合并到主reducer
// combineReducers() 函数用于将分离的 reducer 合并为一个 reducer
const reducers = {
   user,
   admin,
   common,
   seckill,
};

export default combineReducers(reducers);
