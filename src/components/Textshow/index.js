/*
* @Author: wangchen
* @Date:   2020-07-06 09:18:46
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-06 16:15:23
*/
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import { AIcon } from '@utils/icon';

import './style.less';

const Textshow = (props) => {
  return (
    <div className='_textshow'>
        <Carousel 
        	showArrows={false} 
        	infiniteLoop={true}
        	showThumbs={false}
        	autoPlay={true}
        	swipeable={true}
        	emulateTouch={true}
        	dynamicHeight={true}
        	showStatus={false}
        	stopOnHover={true}
            showIndicators={false}
        	interval="8000"
        	transitionTime="800"
        >
            <div className="_group">
                <div className="_group_item">
                    <div>
                        <AIcon type='icon-amall-Product'/>
                    </div>
                    <div>
                        男装1
                    </div>
                </div>
                <div className="_group_item">
                    <div>
                        <AIcon type='icon-amall-Product'/>
                    </div>
                    <div>
                        男装2
                    </div>
                </div>
                <div className="_group_item">
                    <div>
                        <AIcon type='icon-amall-Product'/>
                    </div>
                    <div>
                        男装3
                    </div>
                </div>
            </div>
            <div className="_group">
                <div className="_group_item">
                    <div>
                        <AIcon type='icon-amall-Product'/>
                    </div>
                    <div>
                        男装4
                    </div>
                </div>
                <div className="_group_item">
                    <div>
                        <AIcon type='icon-amall-Product'/>
                    </div>
                    <div>
                        男装5
                    </div>
                </div>
                <div className="_group_item">
                    <div>
                        <AIcon type='icon-amall-Product'/>
                    </div>
                    <div>
                        男装6
                    </div>
                </div>
            </div>
            <div className="_group">
                <div className="_group_item">
                    <div>
                        <AIcon type='icon-amall-Product'/>
                    </div>
                    <div>
                        男装7
                    </div>
                </div>
                <div className="_group_item">
                    <div>
                        <AIcon type='icon-amall-Product'/>
                    </div>
                    <div>
                        男装8
                    </div>
                </div>
                <div className="_group_item">
                    <div>
                        <AIcon type='icon-amall-Product'/>
                    </div>
                    <div>
                        男装9
                    </div>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default Textshow;