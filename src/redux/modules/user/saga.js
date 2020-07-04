/*
* @Author: 王宸
* @Date:   2019-12-28 15:46:23
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-04 10:50:21
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

import * as creators from './creators'

import axios from '@utils/axios'
import { history } from '@utils/history';


export default function* userSaga(){
    yield takeLatest(types.USER_DEMO_SAGA , action => demoReq(action));
}

function* demoReq(action){
    
    console.log("excute")
    // let Authorization =  window.localStorage.getItem('Authorization')
    // if (!Authorization || Authorization === 'null') {
    //     history.replace('/login')
    //     return
    // }

    // let res = yield axios({
    // 	method: "get",
    // 	url: "/user",
    //     headers: { 
    //         'Authorization': Authorization,
    //     },
    // })
    // if (res) {
    //     yield put(userInfoChange(res))
    // }else{
        
    // }
}