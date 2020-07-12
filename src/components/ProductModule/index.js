/*
* @Author: wangchen
* @Date:   2020-07-09 11:26:32
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-12 16:08:47
*/
import React from 'react';
import './style.less';

import { Carousel } from 'react-responsive-carousel';

import { oneToTwoArr } from '@utils/common';
import { AIcon } from '@utils/icon';

import ProductCard from '@comp/ProductCard';

const arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const ProductModule = (props) => {
  return (
    <div className="_product_module">
		<div className="_product_module_top_bar">
			<div className="_product_module_fir_kind">
				家纺&家饰冰丝凉席
			</div>
			<div className="_product_module_sec_kinds">
				{/* 二级类型 */}
				 | 驱蚊用品 | 降温风扇 | 遮阳伞 | 夏凉被 |
			</div>
		</div>
		<div className="_product_module_content">
			<div className="_product_module_content_poster">
				
			</div>
			<div className="_product_module_content_egs">
				<Carousel 
		        	showArrows={true} 
		        	infiniteLoop={true}
		        	showThumbs={false}
		        	autoPlay={true}
		        	swipeable={true}
		        	emulateTouch={true}
		        	showStatus={false}
		        	stopOnHover={true}
		        	showIndicators={false}
		        	interval="3000"
		        	transitionTime="800"

    	            renderArrowPrev={(onClickHandler, hasPrev, label) =>
		                hasPrev && (
		                    <button type="button" onClick={onClickHandler} title={label} style={{ 
                    	        position: 'absolute',
						        zIndex: 2,
						        top: 'calc(50% - 15px)',
						        width: 30,
						        height: 50,
						        cursor: 'pointer',
						        backgroundColor: 'rgb(0,0,0,0.5)',
						        border: 'none',
						        color: '#FFF',
		                    	left: 15 
		                    }}>
		                        <AIcon type='icon-amall-left'/>
		                    </button>
		                )
		            }
		            renderArrowNext={(onClickHandler, hasNext, label) =>
		                hasNext && (
		                    <button type="button" onClick={onClickHandler} title={label} style={{ 
                    	        position: 'absolute',
						        zIndex: 2,
						        top: 'calc(50% - 15px)',
						        width: 30,
						        height: 50,
						        cursor: 'pointer',
						        backgroundColor: 'rgb(0,0,0,0.6)',
						        border: 'none',
						        color: '#FFF',
		                    	right: 15 
		                    }}>
		                        <AIcon type='icon-amall-right'/>
		                    </button>
	                    )	
		            }
				>
					{
						oneToTwoArr(arr,8).map((item0,key0) => (
							<div style={{
								width: '100%',
								position: 'relative',
								display: 'inline-flex',
								flexFlow: 'row wrap',
								backgroundColor: '#FFF',	
							}} key={key0}>
								{
									item0.map((item1,key1) => (
										<div style={{
											width: '25%',
											height: '49%',
											background: '#FFF',
										}} key={key1}>
											<ProductCard/>
										</div>
									))
								}
							</div>
						))
					}
				</Carousel>
			</div>
			<div className="_product_module_content_rec">

				<div className="_product_module_content_rec_item">
					<div className="_product_module_content_rec_item_img">
			    		<img src="https://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/118096/10/2132/320426/5e9eb974E7c8f2abc/dc0a26999616d1f8.jpg.webp" alt=""/>
			    	</div>
					<div className="_product_module_content_rec_item_content">
				    	<div className="_product_module_content_rec_item_info">
				    		小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待
				    	</div>
						<div className="_product_module_content_rec_item_price">
							<span className="price-miaosha">
				    			<i>¥</i>
				    			<span>3969.00</span>
							</span>
						</div>
					</div>
				</div>

				<div className="_product_module_content_rec_item">
					<div className="_product_module_content_rec_item_img">
			    		<img src="https://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/118096/10/2132/320426/5e9eb974E7c8f2abc/dc0a26999616d1f8.jpg.webp" alt=""/>
			    	</div>
					<div className="_product_module_content_rec_item_content">
				    	<div className="_product_module_content_rec_item_info">
				    		小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待
				    	</div>
						<div className="_product_module_content_rec_item_price">
							<span className="price-miaosha">
				    			<i>¥</i>
				    			<span>3969.00</span>
							</span>
						</div>
					</div>
				</div>

				<div className="_product_module_content_rec_item">
					<div className="_product_module_content_rec_item_img">
			    		<img src="https://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/118096/10/2132/320426/5e9eb974E7c8f2abc/dc0a26999616d1f8.jpg.webp" alt=""/>
			    	</div>
					<div className="_product_module_content_rec_item_content">
				    	<div className="_product_module_content_rec_item_info">
				    		小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待
				    	</div>
						<div className="_product_module_content_rec_item_price">
							<span className="price-miaosha">
				    			<i>¥</i>
				    			<span>3969.00</span>
							</span>
						</div>
					</div>
				</div>

				<div className="_product_module_content_rec_item">
					<div className="_product_module_content_rec_item_img">
			    		<img src="https://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/118096/10/2132/320426/5e9eb974E7c8f2abc/dc0a26999616d1f8.jpg.webp" alt=""/>
			    	</div>
					<div className="_product_module_content_rec_item_content">
				    	<div className="_product_module_content_rec_item_info">
				    		小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待
				    	</div>
						<div className="_product_module_content_rec_item_price">
							<span className="price-miaosha">
				    			<i>¥</i>
				    			<span>3969.00</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default ProductModule;