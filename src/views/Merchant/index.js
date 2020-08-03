/*
* @Author: wangchen
* @Date:   2020-08-03 17:44:31
* @Last Modified by:   wangchen
* @Last Modified time: 2020-08-04 01:01:07
*/
import React from 'react';
import './style.less';

import { Tabs,Space,Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import ProductCard from '@comp/ProductCard';

const { TabPane } = Tabs;

const imgs = [
	'https://s11.mogucdn.com/mlcdn/c45406/190831_7b6h1fd9c0ib6742llch41k6400kc_1920x8973.jpg_999x999.v1c0.81.webp',
    'https://s5.mogucdn.com/mlcdn/c45406/190815_0khhl0fa0fkahc92g1ah7gh7e03df_750x2001.jpg_750x999.jpg'
];

const types = ["上衣","外套","裤子","毛衣"];

const arr = [0,1,2,3,4,5,6,7,8,9];

const Cards = (props) => (
	<div className="_cards">
		{
			arr.map((item,key) => (
				<div key={key} style={{
					width: "19%",
					margin: "0.3% 0.2%",
					padding: "0.1% 0.1%",
				}}>
					<ProductCard addCol='true'/>
				</div>
			))
		}
	</div>
);

const Merchant = (props) => {
  return (
    <div className="_merchant">
    	<Space style={{
    		width: '100%'
    	}} direction="vertical" size={30}>
	        <div className="_merchant_header">
	    		<Avatar size={80} icon={<UserOutlined />} />
	    		<h3 style={{
	    			fontSize: '20px',
	    			margin: '10px'
	    		}}>椰子船长Ezicoco女鞋店</h3>
	    		<div style={{
	    			fontSize: '18px',
	    		}}>
	    			<button style={{
	    				color: '#FFF',
	    				border: '1px solid rgb(255,80,0,0.4)',
		    			backgroundColor: 'rgb(255,80,0,0.9)',
		    			padding: '5px 20px'
	    			}}> 关注 </button>
	    		</div>
	    	</div>
	    	<div className="_merchant_img">
	    		<div style={{
					textAlign: 'center'
				}}>
					{
						imgs.map((item,key) => (
							<div key={key}>
								<img src={item} width='100%' alt={key}/>
							</div>
						))
					}
				</div>
	    	</div>
	    	<div className="_merchant_product">
				<Tabs defaultActiveKey="0">
					{
						types.map((item,key) => (
							<TabPane tab={item} key={key}>
							  <Cards/>
							</TabPane>
						))
					}

				</Tabs>
	    	</div>
    	</Space>
    </div>
  )
};

export default Merchant;