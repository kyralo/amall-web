/*
* @Author: wangchen
* @Date:   2020-07-27 13:30:02
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-15 19:16:17
*/
import React from 'react';
import './style.less';

import { Steps,Tabs,Tooltip,Progress } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import { AIcon } from '@utils/icon';

const { TabPane } = Tabs;
const { Step } = Steps;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);

const Product = (props) => {
	return (
		<div className="_product_card">
	    	<div className="_spc_img">
	    		<img src="https://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/118096/10/2132/320426/5e9eb974E7c8f2abc/dc0a26999616d1f8.jpg.webp" alt=""/>
	    	</div>
	    	<div className="seckill-item_info">
	            <Tooltip placement="topLeft" title='小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待'>
	                <span style={{
	                	padding: '0 10px'
	                }}>小辣椒 红辣椒8X Max 6+128GB 深海蓝 3700mAh大电池 6.53英寸水滴屏 全网通4G 双卡双待</span>
	            </Tooltip>
	    	</div>
			<div className="seckill-item">
				<div style={{
					width: '70%',
				}}>
					<div style={{
						width: '100%',
						textAlign: 'left'
					}}>
						<span style={{
			                fontSize: '18px',
			                width: '50%'
			            }} className="price-origin">
			    			<i>¥</i>
			                <Tooltip placement="right" title='3969.00'>
			                    <span>3969.00</span>
			                </Tooltip>
						</span>

						<span style={{
		                    fontSize: '12px',
		                    width: '50%'
			            }}>
							<del>
								<i>¥</i>
				                <Tooltip placement="right" title='3969.00'>
				                    <span>3969.00</span>
				                </Tooltip>
							</del>
						</span>	
					</div>
					<div style={{
						width: '100%',
						padding: '5px 10px'
					}}>
						<Progress percent={50} strokeColor="rgb(254,1,6)" size="small" status="active" />
					</div>					
				</div>
				<div style={{
					width: '30%',
					padding: '5px 0px'
				}}>
					<div style={{
						padding: '10px 5px',
						backgroundColor: 'rgb(254,1,6)',
						border: '1px solid #FFF',
						color: '#FFF',
						cursor: 'pointer'						
					}}>
						<span>立即抢购</span>
					</div>
				</div>
			</div>
	    </div>
	);
};

const arr1 = [0,1,2,3,5,6,7,8,9];
const Seckill = (props) => {
  return (
    <div className="_seckill">
    	<div className="_sec_ad">
    		广告
    	</div>
    	<div className="_sec_time_bar">
			<Steps style={{
				padding: '20px 40px',
				verticalAlign: 'middle',
				backgroundColor: '#FFF',
			}} size="small" current={4} initial={0}>
				<Step status="finish" title={
					<div>
						<h2 style={{
							color: '#000',
						}}>12:00</h2>
						<span>已结束</span>
					</div>
				} />
				<Step status="finish" title={
					<div>
						<h2 style={{
							color: '#000',
						}}>14:00</h2>
						<span>已结束</span>
					</div>
				} />
				<Step status="process" title={
					<div>
						<h2 style={{
							color: '#000',
						}}>16:00</h2>
						<span style={{
							color: '#000',
						}}>距离结束 90s </span>
					</div>
				} />
				<Step status="wait" title={
					<div>
						<h2 style={{
							color: '#000',
						}}>18:00</h2>
						<span>即将开始</span>
					</div>
				} />
				<Step status="wait" title={
					<div>
						<h2 style={{
							color: '#000',
						}}>20:00</h2>
						<span>即将开始</span>
					</div>
				} />
				<Step status="wait" title={
					<div>
						<h2 style={{
							color: '#000',
						}}>22:00</h2>
						<span>即将开始</span>
					</div>
				} />
				<Step status="wait" title={
					<div>
						<h2 style={{
							color: '#000',
						}}>00:00</h2>
						<span>即将开始</span>
					</div>
				} />				
			</Steps>
    	</div>

    	<div className="_sec_product">
			<StickyContainer>
				<Tabs defaultActiveKey="1" renderTabBar={renderTabBar}  style={{ minHeight: 600 }}>
					<TabPane tab="上衣" key="1">
						<div style={{
							width: '100%',
							display: 'inline-flex',
							flexFlow: 'row wrap',
						}}>
							{
								arr1.map((item,key) => (
									<div className='_secp_item' key={key}>
										<Product/>
									</div>
								))
							}
						</div>
					</TabPane>
					<TabPane tab="裤子" key="2">
						<div style={{
							width: '100%',
							display: 'inline-flex',
							flexFlow: 'row wrap',
						}}>
							{
								arr1.map((item,key) => (
									<div className='_secp_item' key={key}>
										<Product/>
									</div>
								))
							}
						</div>
					</TabPane>
					<TabPane tab="毛衣" key="3">
						<div style={{
							width: '100%',
							display: 'inline-flex',
							flexFlow: 'row wrap',
						}}>
							{
								arr1.map((item,key) => (
									<div className='_secp_item' key={key}>
										<Product/>
									</div>
								))
							}
						</div>
					</TabPane>
				</Tabs>
			</StickyContainer>
    	</div>

    </div>
  )
}

export default Seckill;