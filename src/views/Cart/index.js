/*
* @Author: wangchen
* @Date:   2020-07-22 17:18:45
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-02 15:28:30
*/
import React, {useReducer,useState} from 'react';
import './style.less';

import {AIcon} from '@utils/icon';
import { List,Checkbox } from 'antd';

import cart, * as cartReducer from '@store/cart';
import {checkGoods,changeGoodsNum,checkAllGoods} from '@store/cart/creators';

const Cart = (props) => {

    const [cartState, cartDispatch] = useReducer(cart, cartReducer.defaultState);

    const isAll = cartState.list.filter(item => !item.isDisabled && item.check).length == 
			cartState.list.filter(item => !item.isDisabled).length;

	// 选择商品
	const checkCartGoods = id => { cartDispatch(checkGoods(id)) };
	// 切换商品数量
	const changeCartGoodNum = (status,id,num,e) =>{
		// 阻止事件冒泡、浏览器默认行为
		e.preventDefault();
		e.stopPropagation();

		cartDispatch(changeGoodsNum({
			status:status,
			id:id,
			num: num
		}));
	}
	// 全选
	const checkAllCartGoods = () => { cartDispatch(checkAllGoods(isAll)) };

	// 价格
	const countPrice = () => {
		let price = 0;
		cartState.list.filter(item => !item.isDisabled && item.check).map(item => {
			price += item.num*item.price;
		});
		return price;
	};

	// 数量
	const countGoods = () => {
		let count = 0;
		cartState.list.filter(item => !item.isDisabled && item.check).map(item => {
			count += Number(item.num);
		});
		return count;
	};

  return (
    <div className="_cart">
		<div className="_cart_menu">
        	<div style={{
        		width: '10%',
        	}}>
        		<Checkbox checked={isAll} onClick={checkAllCartGoods}>
        			<span>全选</span>
        		</Checkbox>
        	</div>
			<div style={{
        		width: '85%',
        		display: 'inline-flex',
				flexFlow: 'row nowrap',
        	}}>
				<div style={{
					width: '36%',
				}}>
					<span>商品</span>
				</div>
				<div style={{
					width: '18%',
				}}>
					<span>参数</span>
				</div>
				<div style={{
					width: '17%',
				}}>
					<span>单价</span>
				</div>
				<div style={{
					width: '12%',
				}}>
					<span>数量</span>
				</div>
				<div style={{
					width: '20%',
				}}>
					<span>小计</span>
				</div>
			</div>
			<div style={{padding: '0 10px'}}>
				<span>操作</span>
			</div>
		</div>
		<List
		    className="demo-loadmore-list"
		    itemLayout="horizontal"
		    loadMore={<div style={{
		    	margin: '20px',
		    	color: '#000'
		    }}>loadMore</div>}
		    dataSource={cartState.list}
		    style={{
		    	width: '80%',
		    	margin: '0 auto',
	      		backgroundColor: '#FFF',
	      		padding: '0px 20px'
		    }}
		    renderItem={item => (
		      <List.Item
		      	style={{
		      		margin: '20px 0',
		      	}}
		        actions={[<a>删除</a>]}
		      >
		        <div style={
					item.isDisabled ?
					{
			        	display: 'inline-flex',
			        	flexFlow: 'row nowrap',
			        	padding: '20px 0',
						backgroundColor: 'rgb(245,245,245)'
					}
					:
					{
			        	display: 'inline-flex',
			        	flexFlow: 'row nowrap',
			        	padding: '20px 0',
						backgroundColor: '#FFF'
					}
		        }>
		        	<div style={{
		        		width: '10%'
		        	}}>
		        		<Checkbox checked={item.check} disabled={item.isDisabled} onClick={() => checkCartGoods(item.id)}/>
		        	</div>
		        	<div style={{
		        		width: '90%',
		        		backgroundColor: 'inherit'
			        }}>
		        		<CartItem {...{ item,checkCartGoods,changeCartGoodNum,checkAllCartGoods }}/>
		        	</div>
				</div>
		      </List.Item>
		    )}
		/>

		<div className="_cart_end">

			<div style={{
				width: '60%',
				textAlign: 'left',
			}}>
	    		<Checkbox checked={isAll} onClick={checkAllCartGoods}>
	    			<span>全选</span>
	    		</Checkbox>
			</div>
			
			<div style={{
				width: '15%'
			}}>
				<span>已经选择 <span style={{color: 'rgb(255,0,2)',fontSize: '20px'}}> {countGoods()} </span> 件商品</span>
			</div>
			
			<div style={{
				width: '15%'
			}}>
				<span>总价: <span style={{color: 'rgb(255,0,2)',fontSize: '20px'}}> ¥ <span>{countPrice()}</span> </span></span>
			</div>

			<div className="_cart_end_settle">
				<button>结算</button>
			</div>

		</div>
    </div>
  )
}

const CartItem = (props) => {
	return (
		<div className='_cart_item'>
			<div style={{
				width: '10%',
				padding: '0px 10px'
			}}>
				<img style={{width: '100%'}} src={props.item.imgUrl} alt=""/>
			</div>
			<div style={{
				width: '30%',
				textAlign: 'left',
				padding: '0px 10px',
			}}>
				<span>{props.item.title}</span>
			</div>
			<div style={{
				width: '20%',
				padding: '0px 10px',
				textAlign: 'center',
				display: 'flex', 
				flexFlow: 'column nowrap',
				alignItems: 'flex-start',
			}}>
				{
					props.item.attr.map((item,key) => (
						<div key={key}>
							<span>{item.name}</span>
							<span>：</span>
							<span style={{						
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							}}>{item.value}</span>
						</div>
					))
				}
			</div>
			<div style={{
				width: '10%',
				padding: '0px 10px',
				fontSize: '18px',
			}}>
				<span><span>¥</span> {props.item.price}</span>
			</div>
			<div className="_cart_item_count">
                <span style={{
                    cursor: 'pointer'
                }} onClick={
                	props.item.isDisabled ?
                	null
                	:
                	e => props.changeCartGoodNum("-",props.item.id,null,e)
                }>
                    <button> - </button>
                </span>
                <span><input type="text" readOnly value={
	            	props.item.isDisabled ?
                	0
                	:
                	props.item.num
                } style={{
                    maxWidth: '40px',
                    backgroundColor: 'inherit'
                }}/></span>
                <span style={{
                    cursor: 'pointer'
                }} onClick={
                	props.item.isDisabled ?
                	null
                	:
                	e => props.changeCartGoodNum("+",props.item.id,null,e)
                }>
                    <button> + </button>
                </span>
			</div>
			<div style={{
				width: '10%',
				fontSize: '18px',
				padding: '0px 10px',
				color: 'rgb(255,0,4)',
			}}>
				<span><span>¥</span> {
					props.item.isDisabled ?
					props.item.price
					:
					props.item.price*props.item.num
				}</span>
			</div>
		</div>
	);
};


// const MobileCart = (props) => {
//   const [cartState, cartDispatch] = useReducer(cart, cartReducer.defaultState);

//   // 选择商品
//   const checkCartGoods = (goodsId,index) =>{
//     cartDispatch(checkGoods(goodsId));
//   }
//   // 切换商品数量
//   const changeCartGoodNum = (status,goodsId,index,e) =>{
//     // 阻止事件冒泡、浏览器默认行为
//     e.preventDefault();
//     e.stopPropagation();

//     cartDispatch(changeGoodsNum({
//       status:status,
//       goodsId:goodsId
//     }));
//   }
//   // 全选
//   const checkAllCartGoods = () => {
//   	cartDispatch(checkAllGoods(cartState.list.filter(item => item.check).length == cartState.list.length));
//   }
//   // 结算
//   const submit = () => {
//     let submitList = []
//     let checkGoodsList = cartState.list.filter(item => item.check)
//     checkGoodsList.map((item,index) => {
//       let obj = {
//         goodsId:item.goodsId,
//         goodsNum:item.goodsNum
//       }
//       submitList.push(obj)
//     })
//     console.log(submitList)
//   }
//     return (
//       <div className='shoppingCartWarp'>
//         <div className='shoppingCartWarp_header'>
//           <div>购物车</div>
//         </div>
//         <div className='shoppingCartWarp_content'>
//           {
//             cartState.list.map((item,index) => (
//               <div className='shoppingCartWarp_content_list' key={index} onClick={() => checkCartGoods(item.goodsId,index)}>
//                 <div className='shoppingCartWarp_content_check'>
//                   {
//                     item.check ?                 
//                     <AIcon type='icon-amall-open_icon_successx' /> 
// 	                : 
// 	                <AIcon type='icon-amall-uncheck' />
//                   }
//                 </div>
//                 <div className='shoppingCartWarp_content_list_imgWarp'>
//                   <img src={item.goodsSrc} alt=""/>
//                 </div>
//                 <div className='shoppingCartWarp_content_list_info'>
//                   <div className='shoppingCartWarp_content_list_title'>{item.goodsTitle}</div>
//                   <div className='shoppingCartWarp_content_list_subtitle'>{item.goodsSubtitle}</div>
//                   <div className='shoppingCartWarp_content_list_action'>
//                     <div className='shoppingCartWarp_content_list_price'>￥{item.goodsPrice}</div>
//                     <div className='shoppingCartWarp_content_list_actionNum'>
//                       {
//                         // 商品数量为0 隐藏取消和数量
//                         item.goodsNum > 0 ?
//                           <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//                             <div className='shoppingCartWarp_content_list_actionNumChangeButton' onClick={(e) => changeCartGoodNum('reduce',item.goodsId,index,e)}>-</div>
//                             <div className='shoppingCartWarp_content_list_actionNumInfo'>{item.goodsNum}</div>
//                           </div>
//                           : ''
//                       }
//                       <div className='shoppingCartWarp_content_list_actionNumChangeButton' onClick={(e) => changeCartGoodNum('add',item.goodsId,index,e)}>+</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//         <div className='shoppingCartWarp_footer'>
//           <div className='shoppingCartWarp_footer_action'>
//             <div className='shoppingCartWarp_footer_checkAll' onClick={() => checkAllCartGoods()}>
//               {
//                 cartState.list.filter(item => item.check).length == cartState.list.length ? 
//                 <AIcon type='icon-amall-open_icon_successx' /> 
//                 : 
//                 <AIcon type='icon-amall-uncheck' />
//               }
//               全选
//             </div>
//             <div className='shoppingCartWarp_footer_mount'>
//               总计&nbsp;:&nbsp;<span>{cartState.list.reduce((total,item) => total + (item.check ? parseFloat(item.goodsPrice*item.goodsNum) : 0),0).toFixed(2)}</span>
//             </div>
//           </div>
//           <div className='shoppingCartWarp_footer_submit' onClick={() => submit()}>结算</div>
//         </div>
//       </div>
//     )
// }

export default Cart;