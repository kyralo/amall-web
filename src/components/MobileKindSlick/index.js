/*
* @Author: wangchen
* @Date:   2020-07-07 01:44:03
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-07 07:41:51
*/
import React from 'react';

import { Avatar } from 'antd';
import { AIcon } from '@utils/icon';

import './style.less';

const MobileKindSlick = (props) => {
  return (
	<div className="fs_mb_kind">
		{
			props.arr.map((item,key) => (
				<div key={key} className="fs_mb_fir_kind">
					<div>
						<Avatar style={{
							color: '#f56a00',
							backgroundColor: 'rgb(253,227,207,0.5)',
						}} size={40} icon={<AIcon type='icon-amall-Product'/>} />
					</div>
					<div style={{
						color: '#FF5000'
					}}>
						男装{item}
					</div>
				</div>
			))													
		}
	</div>
  )
}

export default MobileKindSlick;