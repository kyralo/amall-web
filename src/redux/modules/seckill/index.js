/*
* @Author: wangchen
* @Date:   2020-07-07 18:12:21
* @Last Modified by:   kyralo
* @Last Modified time: 2020-09-18 20:37:25
*/
import * as types from '@redux/types';

export const defaultState = {
    currentSeckill: {
        secTimeField: '20:00',
    		secDate: '2020-11-14 23:30:00',
    },

};

const typesCommands = {
  [types.SECKILL_LIST_MODIFY](state, action) {
    return Object.assign({}, state, { 
       ...action.payload
    });
  },
};

export default function seckill(state = defaultState, action) {
   const actionResponse = typesCommands[action.type];
   return actionResponse ? actionResponse(state, action) : state;
}