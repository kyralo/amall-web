/*
* @Author: wangchen
* @Date:   2020-07-04 08:39:43
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-06 22:35:52
*/
import React from 'react';

import './style.less';

import {
    useSize,
} from 'ahooks';

import LogoPcIcon from './amall-pc.png';
import LogoMobileIcon from './amall-mobile.png';

import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const Header = (props) => {

    const dom = document.querySelector('body');
    const size = useSize(dom);

    return (
        <div className='_header'>
            <div className="content bar">
                <div className="_logo">
                    {
                        size.width >= 500 ?
                            <img src={LogoPcIcon} alt='amall'/>
                            :
                            <img src={LogoMobileIcon} alt='amall'/>
                    }
                </div>

                <div className="_search">
                    <form>
                        <input type="text" placeholder="请输入..."/>
                        <button type="submit"></button>
                    </form>
                </div>

                <div className="_avatar">
                    <Avatar style={{
                        position: 'absolute',
                        right: '15px'
                    }} size={44} icon={<UserOutlined/>}/>
                </div>
            </div>
        </div>
    )
}

export default Header;