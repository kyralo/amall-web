/*
* @Author: wangchen
* @Date:   2020-07-04 08:35:44
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-04 08:46:38
*/
import React from 'react';

import { Provider } from 'react-redux';
import store from '@redux';

import Header from '@views/Header';
import Footer from '@views/Footer';

const Layout = (props) => {
  return (
    <Provider store={store}>
	    <Header/>
		    {props.children}
	    <Footer/>
    </Provider>
  )
}

export default Layout;