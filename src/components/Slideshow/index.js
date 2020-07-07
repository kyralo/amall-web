/*
* @Author: wangchen
* @Date:   2020-07-03 13:35:32
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-06 21:26:10
*/
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import './style.less'

const Slideshow = (props) => {	
  return (
    <div className='_slideshow'>
        <Carousel 
        	showArrows={true} 
        	infiniteLoop={true}
        	showThumbs={false}
        	autoPlay={true}
        	swipeable={true}
        	emulateTouch={true}
        	dynamicHeight={true}
        	showStatus={false}
        	stopOnHover={true}
        	interval="3000"
        	transitionTime="800"
        >
            <div>
                <img src="https://cdn.kyralo.online/blog/blog-25.jpg!blog" />
            </div>
            <div>
                <img src="https://cdn.kyralo.online/blog/blog-25.jpg!blog" />
            </div>
            <div>
                <img src="https://cdn.kyralo.online/blog/blog-23.jpg!blog" />
            </div>
        </Carousel>
    </div>
  )
}

export default Slideshow;