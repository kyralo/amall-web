/*
* @Author: wangchen
* @Date:   2020-06-24 13:53:10
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-13 13:19:37
*/
import React, {useReducer,useState,useLayoutEffect} from 'react';

import { 
	useScroll,
	useSize,
} from 'ahooks';

import { Avatar, Carousel } from 'antd';

import user, * as userReducer from '@store/user';
import { userDemo } from '@store/user/creators';

import common, * as commonReducer from '@store/common';
import { platformChange } from '@store/common/creators';

import seckill, * as seckillReducer from '@store/seckill';
import { seckillListQuery } from '@store/seckill/creators';

import { AIcon } from '@utils/icon';

import './style.less';
import { oneToTwoArr } from '@utils/common';

import Slideshow from '@comp/Slideshow';
import Textshow from '@comp/Textshow';
import MobileKindSlick from '@comp/MobileKindSlick';
import SecProductCard from '@comp/SecProductCard';
import ProductCard from '@comp/ProductCard';
import SeckillFacade from '@comp/SeckillFacade';
import ProductModule from '@comp/ProductModule';



const arr = [0,1,2,3,4,5,6,7,8,9,10,11];
const arrSec=[0,1,2,3,4,5];
const arr1 = [0,1,2];
const arr2 = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,];

const Home = (props) => {

	const [userState, userDispatch] = useReducer(user,userReducer.defaultState);
	const [seckillState, seckillDispatch] = useReducer(seckill,seckillReducer.defaultState);
	const [commonState, commonDispatch] = useReducer(common,commonReducer.defaultState);

	const scroll = useScroll(document);
	const dom = document.querySelector('body');
	const size = useSize(dom);
	
	useLayoutEffect(() => {
		if (size.width <= 500) {
			if (commonState.isMobile) {
				return
			}
			commonDispatch(platformChange({ isMobile: true }))
		}

		if (size.width > 500) {
			if (!commonState.isMobile) {
				return
			}
			commonDispatch(platformChange({ isMobile: false }))
		}
		console.log(commonState, 'home')
	}, [size]);

	const mobileFirKindArr = (array) => { return oneToTwoArr(array,10); }
	
	return (
		<div className='_home'>
			{
				scroll.top >= (size.height)*0.2 ? 
				<div>hello</div>
				:
				null  
			}

			<div className="_content">
				{

					!commonState.isMobile ?

					// pc
					<div className="fs_pc">
						<div className="fs_pc_top_bar">
							<div className="fs_pc_theme_shop_title">主题市场</div>
							<div className="fs_pc_activity_title">专项活动</div>
							<div className="fs_pc_base_info_title">基本信息</div>
						</div>
						<div className="fs_pc_content">
							<div className="fs_pc_theme_shop">
							{
								arr.map((item,key) => (
									<div key={key} className="fs_pc_theme_shop_content">
										<div className="fs_pc_fir_kind">
											<div>
												<AIcon type='icon-amall-Product'/>
											</div>
											<div>
												男装{item}
											</div>
										</div>
										<div className="fs_pc_sec_kind">
											<Textshow style={{
												height: '100%',
											}}/>
										</div>
									</div>
								))
							}
							</div>
							<div className="fs_pc_activity">
								<div>
									<Slideshow/>
								</div>
							</div>
							<div className="fs_pc_base_info">
								暂无
							</div>
						</div>

						<div className="fs_pc_seckill">
							<div className="fs_pc_seckill_facade">
								<SeckillFacade 
									field={seckillState.currentSeckill.secTimeField}
									current={seckillState.currentSeckill}
								/>
							</div>
							<div className="fs_pc_seckill_product">
								{
									arrSec.map((item,key) => (
										<div key={key} className="fs_pc_seckill_product_card">
											<SecProductCard/>
										</div>
									))
								}
							</div>
						</div>

						<div className="fs_pc_product_module">
							{
								arr1.map((item,key) => (
									<ProductModule key={key}/>
								))
							}
						</div>

						<div style={{
							fontSize: '12px',
							textShadow: '0.3px 0.3px 0.3px rgb(0,0,0,0.7)',
						}} className="fs_pc_product_recommend_title">
							<h1>猜你喜欢</h1>
						</div>
						<div className="fs_pc_product_recommend">
							{
								arr2.map((item,key) => (
									<div key={key} className="fs_pc_product_recommend_item">
										<ProductCard addCol='true'/>
									</div>
								))
							}
						</div>
					</div>

					:

					// mobile
					<div className="fs_mb">
						<div className="fs_mb_activity">
							<div>
								<Slideshow/>
							</div>
						</div>

						<div className="fs_mb_title">
							<h2>主题市场</h2>
						</div>

						<div className="fs_mb_theme_shop">
							<Carousel autoplay>
								{
									mobileFirKindArr(arr).map((item0,key0) => (
										<MobileKindSlick key={key0} arr={item0} style={{width: '100%', margin: '10px 0'}}/>
									))

								}	
							</Carousel>
						</div>

						<div className="fs_mb_title">
							<h2>今日必抢</h2>
						</div>

						<div className="fs_mb_seckill">
							<ProductCard/>
						</div>
					</div>

				}
			</div>
	    </div>
	)
}

export default Home;