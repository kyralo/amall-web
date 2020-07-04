/*
* @Author: 王宸
* @Date:   2019-12-28 15:46:49
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-04 09:34:40
*/

import { combineReducers } from 'redux';

import user from '@store/user';
import admin from '@store/admin';

// 合并到主reducer
// combineReducers() 函数用于将分离的 reducer 合并为一个 reducer
const reducers = {
   user,
   admin
};

export default combineReducers(reducers);
