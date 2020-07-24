/*
* @Author: wangchen
* @Date:   2020-07-22 17:18:45
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-24 00:31:40
*/
import React, {useReducer,useState} from 'react';
import './style.less';

import {AIcon} from '@utils/icon';
import { List } from 'antd';

import cart, * as cartReducer from '@store/cart';
import {checkGoods,changeGoodsNum,checkAllGoods} from '@store/cart/creators';

const Cart = (props) => {
	const list = [0,1,2,3,4];
  return (
    <div className="_cart">
		<List
		    className="demo-loadmore-list"
		    itemLayout="horizontal"
		    loadMore={<div style={{
		    	marginTop: '40px',
		    }}>loadMore</div>}
		    dataSource={list}
		    style={{
		    	width: '70%',
		    	margin: '0 auto',
		    }}
		    renderItem={item => (
		      <List.Item
		      	style={{
		      		margin: '20px 0'
		      	}}
		        actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
		      >
				<CartItem/>
		      </List.Item>
		    )}
		/>
		<MobileCart/>
    </div>
  )
}

const CartItem = (props) => {
	
	return (
		<div style={{width: '100%'}}>
			hello
		</div>
	);
}


const MobileCart = (props) => {
  const [cartState, cartDispatch] = useReducer(cart, cartReducer.defaultState);

  // 选择商品
  const checkCartGoods = (goodsId,index) =>{
    cartDispatch(checkGoods(goodsId));
  }
  // 切换商品数量
  const changeCartGoodNum = (status,goodsId,index,e) =>{
    // 阻止事件冒泡、浏览器默认行为
    e.preventDefault();
    e.stopPropagation();

    cartDispatch(changeGoodsNum({
      status:status,
      goodsId:goodsId
    }));
  }
  // 全选
  const checkAllCartGoods = () => {
  	cartDispatch(checkAllGoods(cartState.list.filter(item => item.check).length == cartState.list.length));
  }
  // 结算
  const submit = () => {
    let submitList = []
    let checkGoodsList = cartState.list.filter(item => item.check)
    checkGoodsList.map((item,index) => {
      let obj = {
        goodsId:item.goodsId,
        goodsNum:item.goodsNum
      }
      submitList.push(obj)
    })
    console.log(submitList)
  }
    return (
      <div className='shoppingCartWarp'>
        <div className='shoppingCartWarp_header'>
          <div>购物车</div>
        </div>
        <div className='shoppingCartWarp_content'>
          {
            cartState.list.map((item,index) => (
              <div className='shoppingCartWarp_content_list' key={index} onClick={() => checkCartGoods(item.goodsId,index)}>
                <div className='shoppingCartWarp_content_check'>
                  {
                    item.check ?                 
                    <AIcon type='icon-amall-open_icon_successx' /> 
	                : 
	                <AIcon type='icon-amall-uncheck' />
                  }
                </div>
                <div className='shoppingCartWarp_content_list_imgWarp'>
                  <img src={item.goodsSrc} alt=""/>
                </div>
                <div className='shoppingCartWarp_content_list_info'>
                  <div className='shoppingCartWarp_content_list_title'>{item.goodsTitle}</div>
                  <div className='shoppingCartWarp_content_list_subtitle'>{item.goodsSubtitle}</div>
                  <div className='shoppingCartWarp_content_list_action'>
                    <div className='shoppingCartWarp_content_list_price'>￥{item.goodsPrice}</div>
                    <div className='shoppingCartWarp_content_list_actionNum'>
                      {
                        // 商品数量为0 隐藏取消和数量
                        item.goodsNum > 0 ?
                          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <div className='shoppingCartWarp_content_list_actionNumChangeButton' onClick={(e) => changeCartGoodNum('reduce',item.goodsId,index,e)}>-</div>
                            <div className='shoppingCartWarp_content_list_actionNumInfo'>{item.goodsNum}</div>
                          </div>
                          : ''
                      }
                      <div className='shoppingCartWarp_content_list_actionNumChangeButton' onClick={(e) => changeCartGoodNum('add',item.goodsId,index,e)}>+</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='shoppingCartWarp_footer'>
          <div className='shoppingCartWarp_footer_action'>
            <div className='shoppingCartWarp_footer_checkAll' onClick={() => checkAllCartGoods()}>
              {
                cartState.list.filter(item => item.check).length == cartState.list.length ? 
                <AIcon type='icon-amall-open_icon_successx' /> 
                : 
                <AIcon type='icon-amall-uncheck' />
              }
              全选
            </div>
            <div className='shoppingCartWarp_footer_mount'>
              总计&nbsp;:&nbsp;<span>{cartState.list.reduce((total,item) => total + (item.check ? parseFloat(item.goodsPrice*item.goodsNum) : 0),0).toFixed(2)}</span>
            </div>
          </div>
          <div className='shoppingCartWarp_footer_submit' onClick={() => submit()}>结算</div>
        </div>
      </div>
    )
}

export default Cart;