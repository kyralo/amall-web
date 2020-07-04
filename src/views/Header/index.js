/*
* @Author: wangchen
* @Date:   2020-07-04 08:39:43
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-05 00:47:19
*/
import React from 'react';

import './style.less';

import LogoIcon from './amall.png';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Header = (props) => {
  return (
    <div className='_header'>
	    <div className="content bar">
	    	<div className="_logo">
	    		<img src={LogoIcon} alt='amall' />
	    	</div>
			
			<div className="_search">
		        <form>
		            <input type="text" placeholder="请输入..." />
		            <button type="submit"></button>
		        </form>
			</div>

			<div className="_avatar">
				<Avatar style={{
					position: 'absolute',
					right: '15px'
				}} size={44} icon={<UserOutlined />} />
			</div>
	    </div>
    </div>
  )
}

export default Header;