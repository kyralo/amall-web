/*
* @Author: wangchen
* @Date:   2020-07-09 11:26:32
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-07 01:13:58
*/
import React from 'react';
import './style.less';

import { Carousel } from 'react-responsive-carousel';
import { Tooltip, Breadcrumb  } from 'antd';

import { oneToTwoArr } from '@utils/common';
import { AIcon } from '@utils/icon';

import ProductCard from '@comp/ProductCard';

const arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const arr1=[0,1,2,3]

const ProductModule = (props) => {
  return (
    <div className="_product_module">
		<div className="_product_module_top_bar">
			{/*<div style={{
				fontSize: '12px',
				textShadow: '0.3px 0.3px 0.3px rgb(0,0,0,0.7)',
			}} className="_product_module_fir_kind">
				<h1>家纺&家饰冰丝凉席</h1>
			</div>
			<div  style={{
				fontSize: '15px',
				textShadow: '0.3px 0.3px 0.3px rgb(0,0,0,0.7)',
			}} className="_product_module_sec_kinds">
				二级类型
				 | 驱蚊用品 | 降温风扇 | 遮阳伞 | 夏凉被 |
			</div>
			*/}
			<Breadcrumb>
				<Breadcrumb.Item><span style={{
					fontSize: '20px',
					textShadow: '0.3px 0.3px 0.3px rgb(0,0,0,0.7)',
				}}>家纺&家饰冰丝凉席</span></Breadcrumb.Item>
			    <Breadcrumb.Item>
			      <a href="">驱蚊用品</a>
			    </Breadcrumb.Item>
			    <Breadcrumb.Item>
			      <a href="">降温风扇</a>
			    </Breadcrumb.Item>
			    <Breadcrumb.Item>
			    	<a href="">遮阳伞</a>
			    </Breadcrumb.Item>
			    <Breadcrumb.Item>
			    	<a href="">夏凉被</a>
			    </Breadcrumb.Item>
			</Breadcrumb>
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
						        border: 'none',
						        color: '#FFF',
		                    	left: 15 
		                    }}>
		                        <AIcon style={{
		                        	color: '#FFF',
		                        }} type='icon-amall-left'/>
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
						        border: 'none',
						        color: '#FFF',
		                    	right: 15 
		                    }}>
		                        <AIcon style={{
		                        	color: '#FFF',
		                        }} type='icon-amall-right'/>
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
				<div style={{
					width: '100%',
					display: 'inline-flex',
					flexFlow: 'row nowrap',
					alignItems: 'baseline',
				}}>
					<div style={{
						width: '65%',
						fontSize: '18px',
						paddingTop: '20px',
						paddingRight: '10px',
					}}>
						<span>热销商品推荐</span>
					</div>
					<div style={{
						width: '35%',
						textAlign: 'right',
						padding: '20px 5px 0px',
						color: '#C8C8C8'
					}}>
						<AIcon type="icon-amall-shuaxin" style={{
							fontSize: '15px',
							margin: '0 5px',
							color: '#C8C8C8'
						}}/>

						<span style={{
							fontSize: '13px',
						}}>换一批</span>
					</div>
				</div>
				{
					arr1.map((item,key) => (
						<div key={key} className="_product_module_content_rec_item">
							<div className="_product_module_content_rec_item_img">
					    		<img src="https://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/118096/10/2132/320426/5e9eb974E7c8f2abc/dc0a26999616d1f8.jpg.webp" alt=""/>
					    	</div>
							<div className="_product_module_content_rec_item_content">
						    	<div className="_product_module_content_rec_item_info">
			    		            <Tooltip placement="topLeft" title='小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待'>
						                <span>小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待</span>
						            </Tooltip>
						    	</div>
								<div className="_product_module_content_rec_item_price">
									<span style={{
										color: 'rgb(247,0,3)'
									}} className="price-miaosha">
						    			<i>¥</i>
						    			<span>3969.00</span>
									</span>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
    </div>
  )
}

export default ProductModule;