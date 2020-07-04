/*
* @Author: wangchen
* @Date:   2020-07-04 20:55:08
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-04 20:57:35
*/
import * as types from '@redux/types';

export const defaultState = {
    token: ''
};

const typesCommands = {
   
  [types.TOKEN_MODIFY](state, action) {
    return Object.assign({}, state, { 
       ...action.payload
    });
  },
};

export default function common(state = defaultState, action) {
   const actionResponse = typesCommands[action.type];
   return actionResponse ? actionResponse(state, action) : state;
}