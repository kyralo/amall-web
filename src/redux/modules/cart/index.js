/*
* @Author: wangchen
* @Date:   2020-07-23 20:36:46
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-25 21:19:05
*/
import * as types from '@redux/types';

export const defaultState = {
	list: [
	    {
	      id: '10001',
	      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	      title: '西部数据（WD）1TB SSD固态硬盘 M.2接口(SATA总线) Blue系列-3D进阶高速读写版｜五年质保',
	      price: '25.8',
	      num: '2',
	      max: '7',
	      check: false,
	      isDisabled: false,
	      attr: [
	      	{
	      		name: '颜色',
	      		value: '黑黄低帮'
	      	},
	      	{
	      		name: '尺码',
	      		value: '41'
	      	}
	      ],
	    },
	    {
	      id: '10002',
	      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	      title: '西部数据（WD）1TB SSD固态硬盘 M.2接口(SATA总线) Blue系列-3D进阶高速读写版｜五年质保',
	      price: '88.8',
	      num: '1',
	      max: '7',
	      check: false,
	      isDisabled: false,
	      attr: [
	      	{
	      		name: '颜色',
	      		value: '黑黄低帮'
	      	},
	      	{
	      		name: '尺码',
	      		value: '41'
	      	}
	      ],
	    },
	    {
	      id: '10003',
	      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	      title: '西部数据（WD）1TB SSD固态硬盘 M.2接口(SATA总线) Blue系列-3D进阶高速读写版｜五年质保',
	      price: '100',
	      num: '10',
	      max: '70',
	      check: false,
	      isDisabled: false,
  	      attr: [
	      	{
	      		name: '颜色',
	      		value: '黑黄低帮'
	      	},
	      	{
	      		name: '尺码',
	      		value: '41'
	      	}
	      ],
	    },
	    {
	      id: '10004',
	      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	      title: '西部数据（WD）1TB SSD固态硬盘 M.2接口(SATA总线) Blue系列-3D进阶高速读写版｜五年质保',
	      price: '30.5',
	      num: '5',
	      max: '7',
	      check: false,
	      isDisabled: true,
  	      attr: [
	      	{
	      		name: '颜色',
	      		value: '黑黄低帮'
	      	},
	      	{
	      		name: '尺码',
	      		value: '41'
	      	}
	      ],
	    },
	],
};

const typesCommands = {
   
	[types.CHECK_GOODS](state, action) {
		let checkList = state.list;
		checkList.map((item, index) => {
			if ( !item.isDisabled && item.id == action.payload){
				item.check = !item.check
			}
		});
		return Object.assign({}, state, {list: [...checkList]})
	},
	[types.CHANGE_GOODS_NUM](state, action) {
		let changeList = state.list;
		changeList.map((item, index) => {
			if (!item.isDisabled && item.id == action.payload.id) {
				 
				if (action.payload.status == '+'){
					item.num = ((Number(item.num) + 1) <= Number(item.max) ? (Number(item.num) + 1) : Number(item.max));
					if (item.num > 0) {
						item.check = true;
					}
				}else if (action.payload.status == '-') {
					item.num = ((Number(item.num) - 1) >= 1 ? (Number(item.num) - 1) : 0);
					if (item.num === 0) {
						item.check = false;
					}
				} else {
					item.num = action.payload.num;
				}
			}
		});
		return Object.assign({}, state, {list: [...changeList]})
	},
	[types.CHECK_ALL_GOODS](state, action) {
		let checkAllList = state.list;
		checkAllList.map((item, index) => {
			if (!item.isDisabled) {
				item.check = !action.payload
			}

			if (item.num == '0') {
				item.num = 1;
			}
		});
		return Object.assign({}, state, {list: [...checkAllList]})
	},
};

export default function cart(state = defaultState, action) {
   const actionResponse = typesCommands[action.type];
   return actionResponse ? actionResponse(state, action) : state;
}