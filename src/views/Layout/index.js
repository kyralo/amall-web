/*
* @Author: wangchen
* @Date:   2020-07-04 08:35:44
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-18 23:28:08
*/
import React, { useReducer }  from 'react';
import './style.less';

import {Provider} from 'react-redux';
import store from '@redux';
import {BackTop, Anchor} from 'antd';
import {AIcon} from '@utils/icon';
import { renderSwitchRoutes } from '@utils/renderRoutes';
import { routes } from '@router';

import common, * as reducer from '@store/common';

import Header from '@views/Header';
import Footer from '@views/Footer';

import NotFound from '@comp/NotFound';

const Loading = React.lazy(() => import('@comp/Loading'));

const Layout = (props) => {

    const [state, dispatch] = useReducer(common, reducer.defaultState);
    let authed = !(state.token || state.token === '' || state.token == null);
    return (
        <Provider store={store}>
            <Anchor affix={true} offsetTop={0}>
                <Header/>
            </Anchor>
            
            {renderSwitchRoutes(routes, authed, props, '/amall', '/amall/home')}

            <Footer/>
            <BackTop>
                <AIcon className="_back_top_icon" type='icon-amall-huojian'/>
            </BackTop>
        </Provider>
    )
}
export default Layout;