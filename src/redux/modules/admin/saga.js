/*
* @Author: 王宸
* @Date:   2019-12-28 15:46:23
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-04 10:51:25
*/

/**
 * put : saga -> reducer
 * take... : 监听action
 */

import { 
	put,
	takeLatest,
} from 'redux-saga/effects'

import * as types from '@redux/types'

import {
	userDemo,
} from './creators'

import axios from '@utils/axios'
import { history } from '@utils/history';


export default function* adminSaga(){
    yield takeLatest(types.ADMIN_DEMO_SAGA , action => demoReq(action));
}

function* demoReq(action){
    console.log("excute")
}