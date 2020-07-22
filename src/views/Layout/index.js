/*
* @Author: wangchen
* @Date:   2020-07-04 08:35:44
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-17 16:41:11
*/
import React from 'react';
import {Provider} from 'react-redux';
import store from '@redux';

import './style.less';

import {BackTop, Anchor} from 'antd';
import {AIcon} from '@utils/icon';

import Header from '@views/Header';
import Footer from '@views/Footer';

const Layout = (props) => {
    const children = props.children
    return (
        <Provider store={store}>
            <Anchor affix={true} offsetTop={0}>
                <Header/>
            </Anchor>

            {children}

            <Footer/>
            <BackTop>
                <AIcon className="_back_top_icon" type='icon-amall-huojian'/>
            </BackTop>
        </Provider>
    )
}
export default Layout;