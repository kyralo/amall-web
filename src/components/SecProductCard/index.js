/*
* @Author: wangchen
* @Date:   2020-07-12 20:15:28
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-15 19:18:02
*/
import React from 'react';
import './style.less';

import { Tooltip } from 'antd';

const SecProductCard = (props) => {
  return (
    <div className="_sec_product_card">
    	<div className="_secpc_img">
    		<img src="https://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/118096/10/2132/320426/5e9eb974E7c8f2abc/dc0a26999616d1f8.jpg.webp" alt=""/>
    	</div>
    	<div className="seckill-item_info">
            <Tooltip placement="topLeft" title='小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待'>
                <span>小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待</span>
            </Tooltip>
    	</div>
		<div className="seckill-item_price">
			<span className="price-miaosha">
    			<i>¥</i>
                <Tooltip placement="bottom" title='3969.00'>
                    <span>3969.00</span>
                </Tooltip>
			</span>

            <span className="price-origin">
                <del>
                    <i>¥</i>
                    <Tooltip placement="bottom" title='14499.00'>
                        <span>14499.00</span>
                    </Tooltip>
                </del>

            </span>
		</div>
    </div>
  )
}

export default SecProductCard;