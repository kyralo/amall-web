/*
* @Author: wangchen
* @Date:   2020-07-13 20:25:27
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-04 22:41:14
*/
import React, {useState} from 'react';
import './style.less';

import {
    Radio,
    Anchor,
    Tabs,
    Affix,
    Avatar,
    Tag,
    Input,
    Rate,
    Comment,
    List,
    Tooltip
} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {AIcon} from '@utils/icon';
import {Carousel} from 'react-responsive-carousel';
import {oneToTwoArr} from '@utils/common';
import moment from 'moment';

import ProductCard from '@comp/ProductCard';
import ProductDetails from '@comp/ProductDetails';

const {Link} = Anchor;
const {TabPane} = Tabs;
const {Search} = Input;

const color = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple'
];

const arr = [
    {
        name: '颜色',
        isColor: true,
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

const kinds = [
    '上衣',
    '裤子',
    '裙子',
    '短裤',
    '内衣',
];

const services = [
    '全国包邮',
    '延误必赔',
    '退货补运费',
    '72小时发货',
    '7天无理由退货',
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
        content: '简洁的圆领.休闲大方.随性自在.露出休闲脖颈.展现优美曲线.优质柔软面料.手感细腻顺滑.质地舒适柔肤.透气清爽.简约利落裁剪.时尚大气.经典流行.',
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
            },
            {
                name: '厚薄',
                value: '普通-------------------------------------'
            },
            {
                name: '厚薄',
                value: '普通-------------------------------------'
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
            title: ['鞋长', '身高'],
            columns: [
                ['40', '1.71'],
                ['40', '1.71'],
                ['40', '1.71'],
                ['40', '1.71'],
                ['40', '1.71'],
                ['40', '1.71'],
            ]
        }
    }
];

const arrRec = [0, 1, 2, 3, 4, 5, 6];

const Primary = (props) => {
    const max = 5000;
    const [count, setCount] = useState(0);
    const [selectedItem, setSelectedItem] = useState(0);

    const countChange = e => {
        let value = e.target.value;
        value = value <= max ? value : max;
        setCount(value);
    };
    return (
        <div className='_commodity_detail_primary'>
            <div className='_commodity_detail_pre_img'>
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    selectedItem={selectedItem}
                >
                    <img
                        src="https://s5.mogucdn.com/mlcdn/c45406/190319_3eaik3j7e0452k841b9ea3d61033h_640x960.jpg_468x468.jpg"
                        alt=""/>
                    <img
                        src="https://s5.mogucdn.com/mlcdn/c45406/190319_3eaik3j7e0452k841b9ea3d61033h_640x960.jpg_468x468.jpg"
                        alt=""/>
                    <img
                        src="https://s5.mogucdn.com/mlcdn/c45406/190319_3eaik3j7e0452k841b9ea3d61033h_640x960.jpg_468x468.jpg"
                        alt=""/>
                    <img
                        src="https://s5.mogucdn.com/mlcdn/c45406/190319_3eaik3j7e0452k841b9ea3d61033h_640x960.jpg_468x468.jpg"
                        alt=""/>
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
                        arr.map((item, key) => (
                            <div className='_cdmo_item' key={key}>
                                <div style={{
                                    width: '20%'
                                }}>{item.name} :
                                </div>

                                <Radio.Group className='_cdmo_item_extra' style={{
                                    width: '80%',
                                    color: '#000'
                                }} buttonStyle="solid" optionType="button">
                                    {
                                        item.isColor ?
                                            item.values.map((item1, key1) => (
                                                <div key={key1} onClick={() => setSelectedItem(key1)}>
                                                    <Radio.Button type="text" style={{
                                                        border: '1px solid #000'
                                                    }} value={item1}>{item1}
                                                    </Radio.Button>
                                                </div>
                                            ))
                                            :
                                            item.values.map((item1, key1) => (
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
                        }}>数量
                        </div>
                        <div style={{
                            width: '80%',
                            backgroudColor: '#000',
                            color: '#000'
                        }}>
                            <span style={{
                                backgroudColor: '#FAFAFA',
                                cursor: 'pointer'
                            }} onClick={() => setCount((Number(count) - 1) >= 0 ? (Number(count) - 1) : 0)}>
                                <button> - </button>
                            </span>
                            <span><input type="text" value={Number(count)} style={{
                                maxWidth: '40px'
                            }} onChange={countChange}/></span>
                            <span style={{
                                backgroudColor: '#FAFAFA',
                                cursor: 'pointer'
                            }} onClick={() => setCount((Number(count) + 1) <= max ? (Number(count) + 1) : max)}>
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
                    }}>服务说明:
                    </div>
                    <div className='_sdmes_items'>
                        {
                            services.map((item, key) => (
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
                    }}>支付方式:
                    </div>
                    <div className='_cdmpm_items'>
                        {
                            pay.map((item, key) => (
                                <div key={key}>
                                    <AIcon style={{
                                        fontSize: '25px'
                                    }} type={item.icon} title={item.name}/>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <Affix offsetTop={55} style={{
                    width: '100%',
                    backgroudColor: '#FFF',
                }}>
                    <div className='_cdm_pay'>
                        <div className='_cdmp_buy'>
                            立即购买
                        </div>
                        <div className='_cdmp_add_to'>
                            加入购物车
                        </div>
                    </div>
                </Affix>
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
                            oneToTwoArr(arrRec, 3).map((item, key) => (
                                <div style={{
                                    marginTop: '5px'
                                }} key={key}>
                                    {
                                        item.map((item1, key1) => (
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
    );
};

const Content = (props) => {
    const [isProductInfo, setProductInfo] = useState(true);
    return (
        <div className='_commodity_detail_content'>
            <div className='_cdc_module'>
                <div className='_cdc_catalogue'>
                    <div style={{
                        width: '100%',
                        height: '60px',
                        backgroundColor: '#F9F9F9',
                        padding: '19px 0',
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
                                isProductInfo ?
                                    egRes.map((items, key) => (
                                        <Link key={key} href={'#_cdc_item' + key} title={<span style={{
                                            fontSize: '16px',
                                        }}>{items.title}</span>}/>
                                    ))
                                    :
                                    null
                            }
                        </Anchor>
                    </div>
                </div>

                <div className='_cdc_tabbar'>
                    <Tabs defaultActiveKey="1" type="card">
                        <TabPane tab={<span onClick={() => setProductInfo(true)}>商品详情</span>} key="1">
                            <div style={{
                                margin: '10px 0',
                                textAlign: 'left',
                                padding: '0 30px'
                            }}>
                                {
                                    egRes.map((items, key) => (
                                        <div style={{margin: '40px 0'}} key={key}>
                                            <h2 id={'_cdc_item' + key}>{items.title}</h2>
                                            <ProductDetails items={items.content}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPane>

                        <TabPane tab={<span onClick={() => setProductInfo(false)}>商品评论</span>} key="2">
                            <div style={{
                                padding: '10px 30px',
                                width: '100%',
                                textAlign: 'left'
                            }}>
                                <div>
                                    <h2>买家评价</h2>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'baseline',
                                    }}>
                                        <div style={{marginRight: '10px'}}>
                                            <Rate allowHalf disabled defaultValue={2.7}/>
                                        </div>
                                        <div style={{marginLeft: '10px'}}>
                                            <h1 style={{color: 'rgb(247,47,52)'}}>2.7 分</h1>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    {/*  评论输入处理 */}
                                </div>

                                <div>
                                    <Tabs defaultActiveKey="1">
                                        <TabPane tab={<div>全部评论</div>} key="1">
                                            <Command {...props}/>
                                        </TabPane>
                                        <TabPane tab={<div>好评</div>} key="2">
                                            <Command {...props}/>
                                        </TabPane>
                                        <TabPane tab={<div>中评</div>} key="3">
                                            <Command {...props}/>
                                        </TabPane>
                                        <TabPane tab={<div>差评</div>} key="4">
                                            <Command {...props}/>
                                        </TabPane>
                                    </Tabs>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab={<span onClick={() => setProductInfo(false)}>其他商品</span>} key="3">
                            <div style={{
                                display: 'inline-flex',
                                flexFlow: 'row wrap',
                                width: '100%',
                            }}>
                                {
                                    arrRec.map((item, key) => (
                                        <div style={{
                                            width: '33.3%',
                                            marginTop: '5px',
                                            padding: '0px 15px',
                                        }} key={key}>
                                            <ProductCard/>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPane>
                    </Tabs>
                </div>

                <div className='_cdc_sidebar'>
                    <Anchor affix={true} offsetTop={60}>
                        <div style={{
                            width: '100%',
                            height: '60px',
                            backgroundColor: '#F9F9F9',
                            padding: '10px 0',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }}>
                            <span style={{
                                margin: '0 5px',
                            }}>
                                <Avatar size={40} icon={<UserOutlined/>}/>
                            </span>
                            <span style={{
                                margin: '0 5px',
                            }}>
                                卡卡西西
                            </span>
                        </div>

                        <div style={{
                            width: '100%',
                            display: 'inline-flex',
                            flexFlow: 'row nowrap',
                            fontSize: '12px',
                            textAlign: 'center',
                            margin: '30px 0',
                        }}>
                            <div style={{
                                width: '50%',
                            }}>
                                <span style={{
                                    border: '0.5px solid rgb(153,153,153)',
                                    padding: '5px 10px',
                                    cursor: 'pointer'
                                }}>收藏店铺</span>
                            </div>
                            <div style={{
                                width: '50%',
                            }}>
                                <span style={{
                                    border: '0.5px solid rgb(153,153,153)',
                                    padding: '5px 10px',
                                    cursor: 'pointer'
                                }}>进入店铺</span>
                            </div>
                        </div>

                        <div style={{
                            borderTop: '0.5px solid rgb(251,251,251)',
                            padding: '20px 15px',
                            display: 'inline-flex',
                            flexFlow: 'row wrap',
                        }}>
                            {
                                kinds.map((item, key) => (
                                    <div style={{
                                        margin: '2.5px 2px',
                                    }} key={key}>
                                        <Tag style={{cursor: 'pointer'}}
                                             color={color[Math.floor(Math.random() * 10)]}>{item}</Tag>
                                    </div>
                                ))
                            }
                        </div>

                        <div style={{
                            borderTop: '0.5px solid rgb(251,251,251)',
                            padding: '20px 15px',
                        }}>
                            <Search
                                placeholder="input search text"
                                enterButton="店内搜索"
                                size="small"
                                onSearch={value => console.log(value)}
                            />
                        </div>
                    </Anchor>
                </div>
            </div>
        </div>
    );
};

// 评论
const Command = (props) => {
    const actions = [
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    const data = [
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <div>
                    <div><Rate style={{
                        margin: '5px 0px',
                        fontSize: '12px'
                    }} defaultValue={3} disabled/></div>
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully and
                        efficiently.
                    </p>
                </div>
            ),
            datetime: (
                <Tooltip
                    title={moment()
                        .subtract(1, 'days')
                        .format('YYYY-MM-DD HH:mm:ss')}
                >
            <span>
              {moment()
                  .subtract(1, 'days')
                  .fromNow()}
            </span>
                </Tooltip>
            ),
        },
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <div>
                    <div><Rate style={{
                        margin: '5px 0px',
                        fontSize: '12px'
                    }} defaultValue={2} disabled/></div>

                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully and
                        efficiently.
                    </p>
                </div>
            ),
            datetime: (
                <Tooltip
                    title={moment()
                        .subtract(2, 'days')
                        .format('YYYY-MM-DD HH:mm:ss')}
                >
            <span>
              {moment()
                  .subtract(2, 'days')
                  .fromNow()}
            </span>
                </Tooltip>
            ),
        },
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <div>
                    <div><Rate style={{
                        margin: '5px 0px',
                        fontSize: '12px'
                    }} defaultValue={1} disabled/></div>
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully and
                        efficiently.
                    </p>
                </div>
            ),
            datetime: (
                <Tooltip
                    title={moment()
                        .subtract(2, 'days')
                        .format('YYYY-MM-DD HH:mm:ss')}
                >
            <span>
              {moment()
                  .subtract(2, 'days')
                  .fromNow()}
            </span>
                </Tooltip>
            ),
        },
    ];
    return (
        <div style={{
            width: '90%',
            height: '100%'
        }}>
            <List
                className="comment-list"
                header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                loadMore={
                    <div style={{textAlign: 'center', marginTop: '40px'}}>
                        ------------- more -------------
                    </div>
                }
                renderItem={item => (
                    <li>
                        <Comment
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                        >
                            <List
                                className="comment-list"
                                header={`${data.length} replies`}
                                itemLayout="horizontal"
                                dataSource={data}
                                loadMore={
                                    <div style={{textAlign: 'center'}}>
                                        ------------- more -------------
                                    </div>
                                }
                                renderItem={item => (
                                    <li>
                                        <Comment
                                            actions={item.actions}
                                            author={item.author}
                                            avatar={item.avatar}
                                            content={item.content}
                                            datetime={item.datetime}
                                        />
                                    </li>
                                )}
                            />
                        </Comment>
                    </li>
                )}
            />
        </div>
    );
};

const Commodity = (props) => {

    return (
        <div className='_commodity'>
            <Primary {...props}/>
            <Content {...props}/>
        </div>
    )
}

export default Commodity;