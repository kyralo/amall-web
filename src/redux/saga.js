/*
* @Author: 王宸
* @Date:   2019-12-28 15:46:58
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-04 09:35:02
*/
import { fork } from 'redux-saga/effects'


import userSaga from '@store/user/saga'
import adminSaga from '@store/admin/saga'

export default function* Saga() {
  yield fork(userSaga);
  yield fork(adminSaga);
}