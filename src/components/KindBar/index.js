/*
* @Author: wangchen
* @Date:   2020-07-12 16:21:48
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-13 11:55:25
*/
import React from 'react';
import './style.less';

const arr=[0,1,2,3,4,5,6,7]

const KindBar = (props) => {
  return (
    <div className='_kind_bar'>
    	<div className='_bar'>
    		{
                arr.map((item,key) => (
                    <div>
                        上衣
                    </div>
                ))
            }
    	</div>
    	<div className="_options">
    		<div>综合</div>
    		<div>销量</div>
    		<div>新品</div>
    		<div className="_options_range_price">
    			<span><input type="text"/></span>
    			<span> - </span>
    			<span><input type="text"/></span>
    			<span><button>确定</button></span>
    		</div>
    	</div>
    </div>
  )
}

export default KindBar;