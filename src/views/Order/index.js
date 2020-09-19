/*
* @Author: wangchen
* @Date:   2020-07-29 00:23:42
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-23 10:07:53
*/
import React from 'react';
import './style.less';

import {Link} from "react-router-dom";

import { Steps,Select,Divider,Radio } from 'antd';

import { 
	UserOutlined, 
	SolutionOutlined, 
	LoadingOutlined, 
	PayCircleOutlined,
	SmileOutlined 
} from '@ant-design/icons';
import {AIcon} from '@utils/icon';

const { Step } = Steps;
const { Option } = Select;

const items = [
	{
		id: '10002',
		imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		title: '西部数据（WD）1TB SSD固态硬盘 M.2接口(SATA总线) Blue系列-3D进阶高速读写版｜五年质保',
		price: '88.8',
		num: '1',
		max: '7',
		check: false,
		isDisabled: false,
		attr: [
			{
				name: '颜色',
				value: '黑黄低帮'
			},
			{
				name: '尺码',
				value: '41'
			}
		],
	},
	{
		id: '10002',
		imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		title: '西部数据（WD）1TB SSD固态硬盘 M.2接口(SATA总线) Blue系列-3D进阶高速读写版｜五年质保',
		price: '88.8',
		num: '1',
		max: '7',
		check: false,
		isDisabled: false,
		attr: [
			{
				name: '颜色',
				value: '黑黄低帮'
			},
			{
				name: '尺码',
				value: '41'
			}
		],
	},
	{
		id: '10002',
		imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		title: '西部数据（WD）1TB SSD固态硬盘 M.2接口(SATA总线) Blue系列-3D进阶高速读写版｜五年质保',
		price: '88.8',
		num: '1',
		max: '7',
		check: false,
		isDisabled: false,
		attr: [
			{
				name: '颜色',
				value: '黑黄低帮'
			},
			{
				name: '尺码',
				value: '41'
			}
		],
	},
];

const pay = [
    {
        name: '支付宝',
        icon: 'icon-amall-zhifubao'
    },
    {
        name: '微信',
        icon: 'icon-amall-wx'
    }
];

const arr = [0,1,2,3,4];

const OrderStep = (props) => {
    return (
		<Steps>
			<Step status="finish" title="Login" icon={<UserOutlined />} />
			<Step status="process" title="Verification" icon={<LoadingOutlined />} />
			<Step status="wait" title="Pay" icon={<PayCircleOutlined />} />
			<Step status="wait" title="Done" icon={<SmileOutlined />} />
		</Steps>
    )
};

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
			<div className="_cart_item_count">
                <span>
                	<span>x</span>
	                {
	                	props.item.isDisabled ?
	                	0
	                	:
	                	props.item.num
	                }
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

const Order = (props) => {
  return (
    <div className="_order">
	    <div className="_order_step">
	    	<div style={{
		    	width: '40%'
		    }}>
		    	<h1>订单页</h1>
		    </div>

		    <div style={{
		    	width: '60%'
		    }}>
		    	<OrderStep />
		    </div>
		</div>
		<div className="_order_step_content">
			<div><span style={{fontSize: '15px', color: '#000'}}>填写并核算订单信息</span></div>
			<div style={{
				margin: '20px 0',
				padding: '10px 20px',
				border: "1px solid rgb(240, 242, 245)",
			}}>
				<div className="_osc_address">
					<div style={{ width: '100%', display: 'inline-flex', flexFlow: 'row nowrap'}}>
						<div style={{width: '50%', textAlign: 'left'}}><h2>收货人信息</h2></div>
						<div style={{width: '50%', textAlign: 'right', padding: '0px 5px', fontSize: '13px'}}>
							<Link  to={`/amall/user/address`}>
								<span style={{
									color: 'rgb(148,155,155)'
								}}>新增地址</span>
							</Link>
						</div>
					</div>
					<div style={{ width: '100%', padding: '5px 20px'}}>
						<Select defaultValue={0} style={{ width: '100%', margin: '10px 0'}}>
							{
								arr.map((item,key) => (
									<Option key={key} style={{
										width: '100%'
									}} value={key}>
										<span style={{
											width: '20%'
										}}>王宸</span>
										<span style={{
											width: '60%',
											margin: '0 30px',
											overflow: "hidden",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap",
										}}>江西省赣州市大余县池江镇|粤客隆超市 {key}</span> 
										<span style={{
											width: '20%'
										}}>152****0536</span>
									</Option>
								))
							}
						</Select>
					</div>
				</div>

				<Divider/>

				<div className="_osc_product">
					<div style={{ width: '100%', display: 'inline-flex', flexFlow: 'row nowrap'}}>
						<div style={{width: '50%', textAlign: 'left'}}><h2>送货清单</h2></div>
					</div>
					<div style={{
						padding: '0px 20px'
					}}>
						{
							items.map((item,key) => (
								<div key={key} style={{
									margin: '40px 0'
								}} >
									<CartItem key={key} item={item}/>
								</div>
							))
						}
					</div>
				</div>

				<Divider/>

				<div className="_osc_paymode">
					<div style={{ width: '100%', display: 'inline-flex', flexFlow: 'row nowrap'}}>
						<div style={{width: '50%', textAlign: 'left'}}><h2>支付方式</h2></div>
					</div>
					<div style={{
						padding: '10px 20px'
					}}>
						 <Radio.Group name="radiogroup" defaultValue={0}>
						 	{
						 		pay.map((item,key) => (
								    <Radio.Button key={key} value={key} style={{
								    	padding: '0px 20px',
								    	margin: '0 10px'
								    }}>
								    	<AIcon style={{
		                                    fontSize: '18px',
		                                }} type={item.icon} title={item.name}/>
		                                <span style={{
		                                	margin: '0 5px',
		                                	fontSize: '15px'
		                                }}>{item.name}</span>
		                            </Radio.Button>
						 		))
						 	}
						</Radio.Group>
					</div>
				</div>

			</div>

			<div className="_osc_count">
				<div style={{
					width: '100%',
					margin: '20px 0',
					padding: '10px 20px'
				}}>
					<div style={{
						width: '100%',
						margin: '10px 0',
					}}>
						共<span>{items.length}</span>件商品，总商品金额：  <span>￥ 929.00</span>
					</div>
					<div style={{
						width: '100%',
						margin: '10px 0',
					}}>
						运费： <span>￥ 0.00</span>
					</div>
				</div>
				<div style={{
					width: '100%',
					margin: '10px 0',
					padding: '10px 20px',
					backgroundColor: '#F4F4F4'
				}}>
					<div style={{
						width: '100%',
						margin: '20px 0',
					}}>
						应付总额：<span>￥ 929.00</span>
					</div>
					<div style={{
						width: '100%',
						margin: '20px 0',
					}}>
						<div style={{
							width: '100%',
							margin: '20px 0'
						}}>收货人： 王宸 152****0536</div>
						<div style={{
							width: '100%',
							margin: '20px 0'
						}}>寄送至： 江西 赣州市 大余县 池江镇 江西省赣州市大余县杨梅路粤客隆池江店</div> 
					</div>
				</div>

				<div className="_osc_submit">
					<button>提交订单</button>
				</div>	
			</div>
		</div>
    </div>
  )
}

export default Order;