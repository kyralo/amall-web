/*
* @Author: wangchen
* @Date:   2020-07-12 16:01:09
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-13 13:20:39
*/
import React from 'react';
import './style.less';

import KindBar from '@comp/KindBar';
import ProductCard from '@comp/ProductCard';

const arr2 = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,];

const Kind = (props) => {
  return (
    <div className='_kind'>
    	<div className='_kind_top_bar'>
    		<KindBar/>
    	</div>
    	<div className='_kind_items'>
    		{
                arr2.map((item,key) => (
                    <div key={key} className="_kind_item">
                        <ProductCard addCol='true'/>
                    </div>
                ))
            }
    	</div>
    </div>
  )
}

export default Kind;