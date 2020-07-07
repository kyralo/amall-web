/*
* @Author: wangchen
* @Date:   2020-06-24 13:53:10
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-07 08:28:36
*/
import React, {useReducer,useState,useLayoutEffect} from 'react';

import { 
	useScroll,
	useSize,
} from 'ahooks';

import { Avatar, Carousel } from 'antd';

import user, * as userReducer from '@store/user';
import common, * as commonReducer from '@store/common';

import { userDemo } from '@store/user/creators';
import { platformChange } from '@store/common/creators';

import { AIcon } from '@utils/icon';

import './style.less';

import Slideshow from '@comp/Slideshow';
import Textshow from '@comp/Textshow';
import MobileKindSlick from '@comp/MobileKindSlick';

const arr = [0,1,2,3,4,5,6,7,8,9,10,11];

const Home = (props) => {

	const [userState, userDispatch] = useReducer(user,userReducer.defaultState);
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

		console.log(mobileFirKindArr(arr))
	}, [size]);

	const mobileFirKindArr = (array) => {
		let firLength = array.length % 10;
		let newArr = []

		if (firLength === 0) {
			newArr.push(array);
			return newArr;
		}

		for (let i = 0; i < firLength-1; i++) {
			newArr.push(array.slice(i*10,(i+1)*10));
		}

		newArr.push(array.slice((firLength-1)*10,array.length)); 

		return newArr;
	}
	
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
					</div>

					:

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
					</div>

				}
			</div>
	    </div>
	)
}

export default Home;