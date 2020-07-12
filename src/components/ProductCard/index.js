/*
* @Author: wangchen
* @Date:   2020-07-07 09:34:33
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-12 15:40:03
*/
import React from 'react';
import './style.less';

const ProductCard = (props) => {

    const good = {
        isPromotion: true
    }

  return (
    <div className="_product_card">
    	<div>
    		<img src="https://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/118096/10/2132/320426/5e9eb974E7c8f2abc/dc0a26999616d1f8.jpg.webp" alt=""/>
    	</div>
    	<div className="seckill-item_info">
    		小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待
    	</div>
		<div className="seckill-item_price">
			<span className="price-miaosha">
    			<i>¥</i>
    			<span>3969.00</span>
			</span>
            {
                good.isPromotion ?
                <span className="price-origin">
                    <i>¥</i>
                    <span>4499.00</span>
                </span>
                :
                null
            }
		</div>
    </div>
  )
}

export default ProductCard;