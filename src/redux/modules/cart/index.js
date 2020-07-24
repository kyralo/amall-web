/*
* @Author: wangchen
* @Date:   2020-07-23 20:36:46
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-24 00:25:36
*/
import * as types from '@redux/types';

export const defaultState = {
	list: [
	    {
	      goodsId: '10001',
	      goodsSrc: 'https://aplus-img.oss-cn-beijing.aliyuncs.com/vVORwq7j4JJPH3LfR55.jpg',
	      goodsTitle: '南酸枣粒 酸甜解暑',
	      goodsSubtitle: '江西特产 五眼果 249g',
	      goodsPrice: '25.8',
	      goodsNum: '2',
	    },
	    {
	      goodsId: '10002',
	      goodsSrc: 'https://aplus-img.oss-cn-beijing.aliyuncs.com/kSJmZOJWythpbOFnMnb.jpg',
	      goodsTitle: '麻花小辫 迷你酥条',
	      goodsSubtitle: '山药小麻花 249g',
	      goodsPrice: '88.8',
	      goodsNum: '1',
	    },
	    {
	      goodsId: '10003',
	      goodsSrc: 'https://timgsa.oss-cn-beijing.aliyuncs.com/dearcoo/thumb/8015.png',
	      goodsTitle: '香菇脆 即食果蔬',
	      goodsSubtitle: '江西风味 249g',
	      goodsPrice: '100',
	      goodsNum: '10',
	    },
	    {
	      goodsId: '10004',
	      goodsSrc: 'https://timgsa.oss-cn-beijing.aliyuncs.com/dearcoo/thumb/8002_v1.png',
	      goodsTitle: '酸甜可口 风味独特',
	      goodsSubtitle: '菩提圣果 圣果可串手串 220g',
	      goodsPrice: '30.5',
	      goodsNum: '5',
	    },
	],
};

const typesCommands = {
   
  [types.CHECK_GOODS](state, action) {
	let checkList = state.list;
	checkList.map((item, index) => {
		if (item.goodsId == action.payload){
		item.check = !item.check
		item.goodsNum == '0' ? item.goodsNum = '1' : ''
		}
	});
	console.log(action)
	return Object.assign({}, state, {list: [...checkList]})
  },
  [types.CHANGE_GOODS_NUM](state, action) {
	let changeList = state.list;
	changeList.map((item, index) => {
		if (item.goodsId == action.payload.goodsId) {
		  action.payload.status == 'add' ? item.goodsNum++ : item.goodsNum--
		  item.goodsNum == '0' ? item.check = false : '' // 如果当前商品选中并且减到0，自动取消选择
		}
	});
	console.log(action)
	return Object.assign({}, state, {list: [...changeList]})
  },
  [types.CHECK_ALL_GOODS](state, action) {
	let checkAllList = state.list;
	checkAllList.map((item, index) => {
		item.check = !action.payload
	});
	console.log(action)
	return Object.assign({}, state, {list: [...checkAllList]})
  },
};

export default function cart(state = defaultState, action) {
   const actionResponse = typesCommands[action.type];
   return actionResponse ? actionResponse(state, action) : state;
}