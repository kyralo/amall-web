/*
* @Author: 王宸
* @Date:   2019-12-28 15:45:09
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-04 10:52:51
*/

// 将 action type 提取出来作为常量，防止编写错误
import * as types from '@redux/types';

export const defaultState = {
    admin_info: {
      avatarUrl: 'admin_asas',
      id: 'admin_sas',
      name: 'sas',
      mail: 'sas',
      sex: 0,
      sign: 'asas',
      fettle: 'sas',
      createTime: 'sas'
    },
};

const typesCommands = {
   
  [types.ADMIN_DEMO](state, action) {
    return Object.assign({}, state, { 
       ...action.payload
    });
  },
};

export default function admin(state = defaultState, action) {
   const actionResponse = typesCommands[action.type];
   return actionResponse ? actionResponse(state, action) : state;
}