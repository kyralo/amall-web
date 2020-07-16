/*
* @Author: wangchen
* @Date:   2020-07-13 20:25:27
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-17 00:23:33
*/
import React, { useState } from 'react';
import './style.less';

import { Radio, Anchor, Tabs } from 'antd';
import { AIcon } from '@utils/icon';
import { Carousel } from 'react-responsive-carousel';
import { Sticky, StickyContainer } from 'react-sticky';
import { oneToTwoArr } from '@utils/common';

import ProductCard from '@comp/ProductCard';
import ProductDetails from '@comp/ProductDetails';

const { Link } = Anchor;
const { TabPane } = Tabs;

const arr = [
    {
        name: '颜色',
        values: [
            '等待款',
            '背影款',
            '想你款',
            '招财猫调皮款',
            '1639款',
            '丹顶鹤椰树款',
            '1322白色美女款',
            '黄毛衣款拍照款',
            '帽子款',
            '红帽子款',
            '纯色款'
        ]
    },
    {
        name: '尺码',
        values: [
            'S',
            'M',
            'L',
            'XL',
            'XXL',
            'XXXL'
        ]
    },
    {
        name: '套餐',
        values: [
            '套餐一',
            '套餐二',
            '套餐三',
            '套餐四'
        ]
    }
];

const services = [
    '72小时发货',
    '7天无理由退货',
    '延误必赔',
    '退货补运费',
    '全国包邮'
];

const pay = [
    {
        name: '支付宝',
        icon: 'icon-amall-zhifubao'
    },
    {
        name: '微信',
        icon: 'icon-amall-wx'
    }
];

const egRes = [
    {
        title: '商品描述',
        content: 'hello world',
    },
    {
        title: '产品参数',
        content: [
            {
                name: '图案',
                value: '纯色'
            },
            {
                name: '厚薄',
                value: '普通'
            },
            {
                name: '厚薄',
                value: '普通-------------------------------------'
            }
        ],
    },
    {
        title: '穿着效果',
        content: [
            'https://s5.mogucdn.com/mlcdn/c45406/190815_0khhl0fa0fkahc92g1ah7gh7e03df_750x2001.jpg_750x999.jpg'
        ],
    },
    {
        title: '尺码说明',
        content: {
            title: ['鞋长','身高'],
            columns: [
                ['40','1.71'],
                ['40','1.71'],
                ['40','1.71'],
                ['40','1.71'],
                ['40','1.71'],
                ['40','1.71'],
            ]
        }
    }
];

const arrRec = [0,1,2,3,4,5,6];

const Commodity = (props) => {
    
    const max = 5000;
    const [count,setCount] = useState(0);
    
    const countChange = e => {
        let value = e.target.value;
        value = value <= max ? value : max;
        setCount(value);
    };

  return (
    <div className='_commodity'>
    	<div className='_commodity_detail_primary'>
    		<div className='_commodity_detail_pre_img'>
    			<Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop={true}
                >
                    <img src="https://s5.mogucdn.com/mlcdn/c45406/190319_3eaik3j7e0452k841b9ea3d61033h_640x960.jpg_468x468.jpg" alt=""/>
                    <img src="https://s5.mogucdn.com/mlcdn/c45406/190319_3eaik3j7e0452k841b9ea3d61033h_640x960.jpg_468x468.jpg" alt=""/> 
                    <img src="https://s5.mogucdn.com/mlcdn/c45406/190319_3eaik3j7e0452k841b9ea3d61033h_640x960.jpg_468x468.jpg" alt=""/> 
                    <img src="https://s5.mogucdn.com/mlcdn/c45406/190319_3eaik3j7e0452k841b9ea3d61033h_640x960.jpg_468x468.jpg" alt=""/>
                </Carousel>
    		</div>
    		<div className='_commodity_detail_mid'>
    			<div className='_cdm_title'>
                    <h1>【两件50元】新款2019春秋白色长袖t恤中长款破洞打底衫女装上衣</h1>
                </div>
                <div className='_cdm_price'>
                    <div className='_cdmp_original'>
                        <span>原价: </span>
                        <span><del><i>¥</i> 988.00</del></span>
                    </div>
                    <div className='_cdmp_current'>
                        <div className='_cdmp_present'>
                            <span>价格: </span>
                            <span style={{
                                color: 'rgb(254,0,7)',
                                fontSize: '25px',
                            }}><i>¥</i> 988.00</span>
                        </div>
                        <div className='_cdmp_sale_count'>
                            <span>累计销量: </span>
                            <span>5000</span>
                        </div>
                    </div>
                </div>

                <div className='_cdm_option'>
                    {
                        arr.map((item,key) => (
                            <div className='_cdmo_item' key={key}>
                                <div style={{
                                    width: '20%'
                                }}>{item.name} :</div>

                                <Radio.Group className='_cdmo_item_extra' style={{
                                    width: '80%',
                                    color: '#000'
                                }} buttonStyle="solid" optionType="button">
                                    {
                                        item.values.map((item1,key1) => (
                                           <div key={key1}><Radio.Button type="text" style={{
                                               border: '1px solid #000'
                                           }} value={item1}>{item1}</Radio.Button></div>
                                        ))
                                    }
                                </Radio.Group>
                            </div>
                        ))
                    }
                    <div className='_cdmo_buy_count'>
                        <div style={{
                                    width: '20%'
                        }}>数量</div>
                        <div style={{
                            width: '80%',
                            backgroudColor: '#000',
                            color: '#000'
                        }}>
                            <span style={{
                                backgroudColor: '#FAFAFA',
                                cursor: 'pointer'
                            }} onClick={() => setCount((count-1) >= 0 ? (count-1) : 0)}>
                                <button> - </button>
                            </span>
                            <span><input type="text" value={count} style={{
                                maxWidth: '40px'
                            }} onChange={countChange}/></span>
                            <span style={{
                                backgroudColor: '#FAFAFA',
                                cursor: 'pointer'
                            }} onClick={() => setCount((count+1) <= max ? (count+1) : max)}>
                                <button> + </button>
                            </span>

                            <span style={{
                                border: 'none',
                                marginLeft: '5px'
                            }}>库存: </span>
                            <span style={{
                                border: 'none',
                                textAlign: 'left'
                            }}>5000</span>
                        </div>
                    </div>
                </div>

                <div className='_cdm_extra_services'>
                    <div style={{
                        width: '20%',
                    }}>服务说明: </div>
                    <div className='_sdmes_items'>
                        {
                           services.map((item,key) => (
                               <div key={key}>
                                   <span><AIcon style={{
                                       color: 'rgb(255,0,21)',
                                       fontSize: '20px'
                                   }} type='icon-amall-event-normal'/></span>
                                   <span>{item}</span>
                               </div>
                           ))
                        }
                    </div>
                </div>
                
                <div className='_cdm_pay_mode'>
                    <div style={{
                        width: '20%'
                    }}>支付方式: </div>
                    <div className='_cdmpm_items'>
                        {
                            pay.map((item,key) => (
                                <div key={key}>
                                    <AIcon style={{
                                       fontSize: '25px'
                                    }} type={item.icon} title={item.name}/>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='_cdm_pay'>
                    <div className='_cdmp_buy'>
                        立即购买
                    </div>
                    <div className='_cdmp_add_to'>
                        加入购物车
                    </div>
                </div>
    		</div>
    		<div className='_commodity_detail_rec'>
    			<div className='_cdr_title'><span><h1>热卖推荐</h1></span></div>
                <div>
                    <Carousel
                        showArrows={true} 
                        showThumbs={false}
                        autoPlay={true}
                        swipeable={true}
                        emulateTouch={true}
                        dynamicHeight={true}
                        showStatus={false}
                        stopOnHover={true}
                        showIndicators={false}
                        axis="vertical"
                        interval="10000"
                        transitionTime="1000"

                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button type="button" onClick={onClickHandler} title={label} style={{ 
                                    position: 'absolute',
                                    zIndex: 2,
                                    left: 'calc(50% - 30px)',
                                    width: 60,
                                    height: 15,
                                    border: 'none',
                                    color: '#FFF',
                                    backgroundColor: '#FFF',
                                    border: '0.5px solid #000',
                                    top: 0 
                                }}>
                                    <AIcon style={{
                                        color: '#000',
                                        fontSize: '15px'
                                    }} type='icon-amall-Icon-KeyboardArrow-Down-Rounded'/>
                                </button>
                            )
                        }

                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" onClick={onClickHandler} title={label} style={{ 
                                    position: 'absolute',
                                    zIndex: 2,
                                    left: 'calc(50% - 30px)',
                                    width: 60,
                                    height: 15,
                                    border: 'none',
                                    color: '#FFF',
                                    backgroundColor: '#FFF',
                                    border: '0.5px solid #000',
                                    bottom: 0 
                                }}>
                                    <AIcon style={{
                                        color: '#000',
                                        fontSize: '15px'
                                    }} type='icon-amall-arrow-left-c-copy'/>
                                </button>
                            )    
                        }
                    >
                        {
                            oneToTwoArr(arrRec,3).map((item,key) => (
                                <div style={{
                                    marginTop: '5px'
                                }} key={key}>
                                    {
                                        item.map((item1,key1) => (
                                            <div style={{
                                                padding: '0px 15px',
                                            }} key={key1}>
                                                <ProductCard/>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }  
                    </Carousel>
                </div>
    		</div>
    	</div>
    	<div className='_commodity_detail_content'>
            <div className='_cdc_module'>
                <div className='_cdc_catalogue'>
                    <div style={{
                        width: '100%',
                        height: '40px',
                        backgroundColor: '#F9F9F9',
                        padding: '9px 0',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}>
                        <span>一键定位</span>
                    </div>
                    
                    <div style={{
                        width: '100%',
                        borderRight: '1px solid rgb(245,245,245)',
                        backgroundColor: '#F9F9F9',
                        margin: '20px 0',
                    }}>
                        <Anchor affix={true} offsetTop={80}>
                            {
                                egRes.map((items,key) => (
                                    <Link key={key} href={'#_cdc_item' + key} title={<span style={{
                                        fontSize: '16px',
                                    }}>{items.title}</span>}/>
                                ))
                            }
                        </Anchor>
                    </div>
                </div>

                <div className='_cdc_tabbar'>
                    <Tabs defaultActiveKey="1" type="card">
                        <TabPane tab="商品详情" key="1">
                            <div style={{
                                margin: '10px 0',
                                textAlign: 'left',
                                padding: '0 30px'
                            }}>
                                {
                                    egRes.map((items,key) => (
                                        <div style={{margin: '40px 0'}} key={key}>
                                            <h2 id={'_cdc_item' + key}>{items.title}</h2>
                                            <ProductDetails items={items.content}/>
                                        </div>   
                                    ))
                                }
                            </div>
                        </TabPane>
                        <TabPane tab="商品评论" key="2">
                          Content of tab 2
                        </TabPane>
                        <TabPane tab="其他商品" key="3">
                          Content of tab 3
                        </TabPane>
                    </Tabs>
                </div>

                <div className='_cdc_sidebar'>
                    <Anchor affix={true} offsetTop={60}>
                        <div style={{
                            width: '100%',
                            height: '40px',
                            backgroundColor: '#F9F9F9',
                            padding: '9px 0',
                            fontSize: '16px',
                            cursor: 'pointer'
                        }}>
                            <span>卡卡西西</span>
                        </div>
                        <div style={{
                            margin: '20px 0'
                        }}>
                            0000000
                        </div>
                    </Anchor>
                </div>
            </div>
    	</div>
    </div>
  )
}

export default Commodity;