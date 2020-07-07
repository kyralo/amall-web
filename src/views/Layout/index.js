/*
* @Author: wangchen
* @Date:   2020-07-04 08:35:44
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-05 16:40:08
*/
import React from 'react';

import { Provider } from 'react-redux';
import store from '@redux';

import Header from '@views/Header';
import Footer from '@views/Footer';

import { Sticky, StickyContainer } from 'react-sticky';

const Layout = (props) => {
	const children = props.children
    return (
	    <Provider store={store}>
			<StickyContainer className="container">
				<Sticky>
					{({style}) => (					
						<div style={{...style, background: '#FFF', zIndex: '999999'}}>
						    <Header />
						</div>
					)}
				</Sticky>

				<div>
					{children}
				</div>

			</StickyContainer>
		    <Footer/>
	    </Provider>
    )
}
export default Layout;