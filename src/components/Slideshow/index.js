/*
* @Author: wangchen
* @Date:   2020-07-03 13:35:32
* @Last Modified by:   kyralo
* @Last Modified time: 2020-09-18 19:15:17
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
                <img src="https://aecpm.alicdn.com/simba/img/TB12NW9kH1YBuNjSszhSuwUsFXa.jpg" />
            </div>
            <div>
                <img src="https://aecpm.alicdn.com/simba/img/TB12NW9kH1YBuNjSszhSuwUsFXa.jpg" />
            </div>
            <div>
                <img src="https://aecpm.alicdn.com/simba/img/TB12NW9kH1YBuNjSszhSuwUsFXa.jpg" />
            </div>
        </Carousel>
    </div>
  )
}

export default Slideshow;