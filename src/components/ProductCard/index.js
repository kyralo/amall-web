/*
* @Author: wangchen
* @Date:   2020-07-07 09:34:33
* @Last Modified by:   kyralo
* @Last Modified time: 2020-09-18 19:27:48
*/
import React from 'react';
import './style.less';

import { Tooltip } from 'antd';

import { AIcon } from '@utils/icon';

import {Link} from "react-router-dom";

const ProductCard = (props) => {

  return (
    <Link  to={`/amall/co`}>
        <div className="_product_card">
        	<div className="_pc_img">
        		<img src="https://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/118096/10/2132/320426/5e9eb974E7c8f2abc/dc0a26999616d1f8.jpg.webp" alt=""/>
        	</div>
        	<div className="seckill-item_info">
                <Tooltip placement="topLeft" title='小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待'>
                    <span>小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待</span>
                </Tooltip>
        	</div>
    		<div className="seckill-item">
    			<span style={{
                        fontSize: '15px'
                }} className="price-origin">
        			<i>¥</i>
                    <Tooltip placement="right" title='3969.00'>
                        <span>3969.00</span>
                    </Tooltip>
    			</span>

                {
                    props.addCol ?
                    <span className="item-col">
                        <span>
                            月销: 
                        </span>
                        <Tooltip placement="right" title='5000'>
                            <span style={{ fontSize: '15px' }}>5000</span>
                        </Tooltip>
                    </span>
                    :
                    null
                }
    		</div>
        </div>
    </Link>

  )
}

export default ProductCard;