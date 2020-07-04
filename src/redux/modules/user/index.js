/*
* @Author: 王宸
* @Date:   2019-12-28 15:45:09
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-04 15:52:36
*/

// 将 action type 提取出来作为常量，防止编写错误
import * as types from '@redux/types'

export const defaultState = {
    user_info: {
      avatarUrl: 'asas',
      id: 'sas',
      name: 'sas',
      mail: 'sas',
      sex: 0,
      sign: 'asas',
      fettle: 'sas',
      createTime: 'sas'
    },
    hello: {
      id: 'ssa'
    }
};

const typesCommands = {
   
  [types.USER_DEMO](state, action) {

    return Object.assign({}, state, { 
      user_info: Object.assign({}, state.user_info, { 
        ...action.payload.user_info
      })
    });
  },
};

export default function user(state = defaultState, action) {
   const actionResponse = typesCommands[action.type];
   return actionResponse ? actionResponse(state, action) : state;
}