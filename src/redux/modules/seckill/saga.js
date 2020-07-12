/*
* @Author: wangchen
* @Date:   2020-07-07 18:15:23
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-07 18:18:49
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
    yield takeLatest(types.SECKILL_LIST_QUERY , action => querySeckillList(action));
}

function* querySeckillList(action){
    
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