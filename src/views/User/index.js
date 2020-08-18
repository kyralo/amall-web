/*
* @Author: wangchen
* @Date:   2020-07-20 09:56:59
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-18 23:27:24
*/
import React, {useState,Suspense} from 'react';
import './style.less';

import {
    Layout, 
    Menu, 
    Anchor, 
    Upload, 
    Radio,
    List,
    Tooltip,
    Drawer,
    Divider,
    Avatar,
    Space
} from 'antd';

import {Link} from "react-router-dom";

import ImgCrop from 'antd-img-crop';
import {AIcon} from '@utils/icon';
import {oneToTwoArr} from '@utils/common';

import { renderSwitchRoutes } from '@utils/renderRoutes';
import { userRoutes } from '@router';

import Loading from '@comp/Loading'
import UserAddress from '@views/UserAddress';

const {SubMenu} = Menu;
const {Content, Footer, Sider} = Layout;

const User = (props) => {

    const route = { path: props.match.path };

    return (
        <div className="_user">
            <Content style={{padding: '0 50px', width: "80%",margin: "0 auto",}}>
                <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                        >
                            <Menu.Item key="sub1" icon={<AIcon style={{fontSize: '18px'}}
                                                               type="icon-amall-iconinterfaceleft_menuuserinfo"/>}>
                                <Link to={`${route.path}/info`}><span>基本信息</span></Link>
                            </Menu.Item>
                            <Menu.Item key="sub2" icon={<AIcon style={{fontSize: '18px'}} type="icon-amall-gouwuche"/>}>
                                <Link  to={`/amall/cart`}><span>购物车</span></Link>
                            </Menu.Item>
                            <SubMenu key="sub3" icon={<AIcon style={{fontSize: '18px'}} type="icon-amall-dingdan"/>}
                                     title={<span>订单管理</span>}>
                                <Menu.Item key="sub3-1">
                                    <Link  to={`${route.path}/order/notpay`}><span>待付款</span></Link>
                                </Menu.Item>
                                <Menu.Item key="sub3-2">
                                    <Link  to={`${route.path}/order/pay`}><span>已付款</span></Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" icon={<AIcon style={{fontSize: '18px'}} type="icon-amall-collection"/>}
                                     title={<span>我的收藏</span>}>
                                <Menu.Item key="sub4-1">
                                    <Link to={`${route.path}/collection/shop`}><span>店铺收藏</span></Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub5" icon={<AIcon style={{fontSize: '18px'}} type="icon-amall-didian"/>}
                                     title={<span>地址管理</span>}>
                                <Menu.Item key="sub5-1">
                                    <Link to={`${route.path}/address`}><span>配送地址</span></Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub6" icon={<AIcon style={{fontSize: '18px'}} type="icon-amall-anquan"/>}
                                     title={<span>安全设置</span>}>
                                <Menu.Item key="sub6-1">
                                    <Link to={`${route.path}/security/password`}><span>设置密码</span></Link>
                                </Menu.Item>
                                <Menu.Item key="sub6-2">
                                    <Link to={`${route.path}/security/associate`}><span>账号关联</span></Link>
                                </Menu.Item>
                                <Menu.Item key="sub6-3">
                                    <Link to={`${route.path}/security/cancel`}><span>账号注销</span></Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="sub7" icon={<AIcon style={{fontSize: '18px'}} type="icon-amall-tuichudenglu"/>}>
                                <span>退出登录</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{border: 'none', backgroundColor: '#FFF'}}>
                        <Content style={{padding: '10px 0px', height: '100%'}}>
                            <div className="_user_content"
                                 style={{minHeight: '30vh', backgroundColor: '#FFF'}}>

                                <Suspense fallback={<Loading/>}>
                                    {renderSwitchRoutes(userRoutes, false, props, `${route.path}`, `${route.path}/info`)}
                                </Suspense>

                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Content>
        </div>
    )
}

// UserInfo

export const UserInfo = (props) => {
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);

    const onChange = ({fileList: newFileList}) => {
        setFileList(newFileList);
    };

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };
    return (
        <div style={{textAlign: 'left', fontSize: '16px', padding: '0 40px'}}>
            <h1>个人资料</h1>
            <div style={{
                width: '100%',
                borderTop: '1px solid #F9F9F9',
                padding: '30px 20px',
                display: 'inline-flex',
            }}>
                <div style={{width: '50%'}}><span>头像</span></div>
                <div style={{width: '50%'}}>
                    <ImgCrop rotate>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && '+ Upload'}
                        </Upload>
                    </ImgCrop>
                </div>
            </div>
            <div style={{
                width: '100%',
                borderTop: '1px solid #F9F9F9',
                padding: '30px 20px',
                display: 'inline-flex',
            }}>
                <div style={{width: '50%'}}><span>昵称</span></div>
                <div style={{width: '50%'}}>
                    ----------------------
                </div>
            </div>
            <div style={{
                width: '100%',
                borderTop: '1px solid #F9F9F9',
                padding: '30px 20px',
                display: 'inline-flex',
            }}>
                <div style={{width: '50%'}}><span>性别</span></div>
                <div style={{width: '50%'}}>
                    <Radio.Group value='woman'>
                        <Radio value='man'>男</Radio>
                        <Radio value='woman'>女</Radio>
                    </Radio.Group>
                </div>
            </div>
            <div style={{
                width: '100%',
                borderTop: '1px solid #F9F9F9',
                padding: '30px 20px',
                display: 'inline-flex',
            }}>
                <div style={{width: '50%'}}><span>邮箱</span></div>
                <div style={{width: '50%'}}>
                    ----------------------
                </div>
            </div>
            <div style={{
                width: '100%',
                borderTop: '1px solid #F9F9F9',
                padding: '30px 20px',
                display: 'inline-flex',
            }}>
                <div style={{width: '50%'}}>电话号码</div>
                <div style={{width: '50%'}}>
                    ----------------------
                </div>
            </div>
            <div style={{
                width: '100%',
                borderTop: '1px solid #F9F9F9',
                padding: '30px 20px',
                display: 'inline-flex',
            }}>
                <div style={{width: '50%'}}>账号状态</div>
                <div style={{width: '50%'}}>
                    ----------------------
                </div>
            </div>
            <div style={{
                width: "100%",
                borderTop: "1px solid #F9F9F9",
                padding: "30px 20px",
                display: "inline-flex",
            }}>
                <div style={{width: '50%'}}>创建时间</div>
                <div style={{width: '50%'}}>
                    ----------------------
                </div>
            </div>
        </div>
    );
};

// Address

const data = [0,1,2,3,4];
export const Address = (props) => {

    const [add,setAdd] = useState(false);

    return (
        <div>
            <div style={{
                textAlign: 'left', 
                fontSize: '16px', 
                padding: '0 40px'
            }}>
                <h1>用户地址</h1>
                <Divider/>
            </div>

            <div style={{
                width: '100%'
            }}>
                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={data}
                    style={{
                        width: '80%',
                        margin: '0 auto',
                    }}
                    renderItem={item => (
                        <List.Item
                            style={
                                {
                                    border: '1px solid rgb(32,32,32,0.4)',
                                    padding: '15px 10px',
                                    color: '#000',
                                    margin: '20px 0'
                                }
                            }
                            actions={[
                                <a key="list-loadmore-edit">设为默认</a>, 
                                <a key="list-loadmore-more">编辑</a>,
                                <a key="list-loadmore-more">删除</a>
                            ]}
                        >
                            <div style={{
                                width: '100%',
                                display: 'inline-flex',
                                flexFlow: 'row nowrap',
                            }}>
                                <div style={{
                                    width: '20%'
                                }}>
                                   王宸 
                                </div>
                                <div style={{
                                    width: '40%',
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>
                                    <Tooltip placement="topLeft" title='江西省赣州市大余县池江镇|粤客隆超市'>
                                        江西省赣州市大余县池江镇|粤客隆超市
                                    </Tooltip>
                                </div>
                                <div style={{
                                    width: '20%'
                                }}>
                                    341502
                                </div>
                                <div style={{
                                    width: '20%'
                                }}>
                                    152****0536 
                                </div>
                            </div>
                        </List.Item>
                    )}
                  />
            </div>

            <div style={{
                width: '100%'
            }}>
                <button style={{
                    width: '80%',
                    height: '40px',
                    fontSize: '20px',
                    border: '1px solid rgb(221,221,221)',
                    backgroundColor: '#F1F1F1'
                }} onClick={() => setAdd(!add)}>+</button>
            </div>

            <Drawer
              placement="top"
              closable={false}
              onClose={() => setAdd(false)}
              visible={add}
              getContainer={false}
              height={480}
              style={{ position: 'absolute' }}
            >
                <div style={{
                    border: '1px dashed rgb(221,221,221)',
                    borderRadius: '15px',
                    padding: '30px 0',
                    margin: '0 auto',
                    width: '80%',
                }}>
                    <UserAddress {...{...props, setAdd}}/>
                </div>
            </Drawer>
        </div>
    );
};

// Order

const items = [
    {
        id: '10002',
        imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        title: '西部数据（WD）1TB SSD固态硬盘 M.2接口(SATA总线) Blue系列-3D进阶高速读写版｜五年质保',
        price: '88.8',
        num: '1',
        max: '7',
        check: false,
        isDisabled: false,
        attr: [
            {
                name: '颜色',
                value: '黑黄低帮'
            },
            {
                name: '尺码',
                value: '41'
            }
        ],
    },
];
export const UserOrderItem = (props) => {
    return (
        <div className='_order_item'>
            <div style={{
                width: '12.5%',
            }}>
                <img style={{width: '100%'}} src={props.item.imgUrl} alt=""/>
            </div>
            <div style={{
                width: '50%',
                textAlign: 'left',
                paddingLeft: '20px',
            }}>
                <span>{props.item.title}</span>
            </div>

            <div className="_order_item_count">
                <span>
                    <span>x</span>
                    {
                        props.item.isDisabled ?
                        0
                        :
                        props.item.num
                    }
                </span>
            </div>
            <div style={{
                width: '12.5%',
                fontSize: '18px',
                padding: '0px 10px',
                color: 'rgb(255,0,4)',
            }}>
                <span><span>¥</span> {
                    props.item.isDisabled ?
                    props.item.price
                    :
                    props.item.price*props.item.num
                }</span>
            </div>

        </div>
    );
};
export const UserOrder = (props) => {

    return (
        <div style={{width: '100%'}}>
            <div style={{
                width: '100%',
                textAlign: 'left', 
                fontSize: '16px', 
                padding: '0 40px'
            }}>
                <h1>用户订单</h1>
                <Divider/>
            </div>
            <div style={{
                width: 'calc(100% - 80px)',
                margin: '40px',
                border: '1px solid #E8E8E8'
            }}>
                <div style={{
                    width: '100%',
                    padding: '5px 20px',
                    textAlign: 'center',
                    display: 'inline-flex',
                    flexFlow: 'row nowrap',
                    fontSize: '13px',
                    alignItems: 'baseline',
                    color: '#000',
                    backgroundColor: '#F5F5F5'
                }}>
                    <div style={{
                        marginRight: '10px'
                    }}> 
                        <span style={{fontSize: '14px'}}>2020-08-02 23:44:04</span>    
                    </div>
                    <div>
                        订单号： <span style={{fontSize: '14px'}}>123965404753</span>
                     </div>
                </div>

                <div style={{
                    width: '100%',
                    display: 'inline-flex',
                    flexFlow: 'row nowrap',
                    alignItems: "center",
                }}>
                    <div style={{
                        width: '80%'
                    }}>
                        {
                            items.map((item,key) => (
                                <div key={key} style={{
                                    margin: '20px 0',
                                    width: '100%',
                                }} >

                                    <div style={{
                                        width: '100%',
                                        padding: '0px 10px',
                                        textAlign: 'center',
                                    }}>
                                        <UserOrderItem key={key} item={item}/>
                                    </div>

                                </div>
                            ))
                        } 
                    </div>


                    <div style={{
                        width: '20%',
                        padding: '0px 10px',
                        fontSize: '15px',
                        textAlign: 'center',
                    }}>
                        {
                            props.isPay ?
                            <span>已付款</span>
                            :
                            <span>
                                <button className="_pay_button">立即购买</button>
                            </span>
                        }
                    </div>

                </div>

            </div>
        </div>
    );    
};

// 待付款
export const UserNotPayOrder = (props) => {
    return (
        <div style={{width: '100%'}}>
            <UserOrder isPay={false}/>
        </div>
    );
}

// 已付款
export const UserPayOrder = (props) => {
    return (
        <div style={{width: '100%'}}>
            <UserOrder isPay={true}/>
        </div>
    );
}


// 用户收藏

// 用户 店铺收藏
const uscArr = [0,1,2,3,4,5,6,7,8,9,10];
export const UserShopCollection = (props) => {
    return (
        <div className="_user_shop_col">
            <div style={{
                width: '100%',
                textAlign: 'left', 
                fontSize: '16px', 
                padding: '0 40px'
            }}>
                <h1>店铺收藏</h1>
                <Divider/>
            </div>
            <div style={{
                width: '100%',
                fontSize: '16px', 
                padding: '0 40px',
                textAlign: 'center',
            }}>
                {
                    oneToTwoArr(uscArr,3).map((item,key) => (
                        <div key={key} style={{
                            width: '100%',
                            display: 'inline-flex',
                            flexFlow: 'row nowrap'
                        }}>
                            {
                                item.map((item1,key1) => (
                                    <div key={key1} className="_usc_item">
                                        <div style={{
                                            padding: '0 10px',
                                        }}><Avatar size={64} src='https://view.kyralo.online/aurora/user/avatar/58068837cdcd40dfbd71314fb3e084d7_avatar.png'/></div>
                                        <div style={{
                                            padding: '10px 10px',
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            fontSize: '15px',
                                            color: '#000'
                                        }}><span>椰子船长 
                                            <span> / </span> 
                                            Ezicoco女鞋店
                                            </span>
                                        </div>
                                        <div style={{
                                            width: '100%',
                                            display: 'inline-flex',
                                            flexFlow: 'row nowrap'
                                        }}>
                                            <div className="_usc_cancel">
                                                <span style={{
                                                    width: '100%',
                                                    textAlign: 'center',
                                                }}>取消关注</span>
                                            </div>
                                            <div className="_usc_goto">
                                                <span style={{
                                                    width: '100%',
                                                    textAlign: 'center',
                                                }}>进入店铺</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};


// 密码修改

export const Password = (props) => {
    return (
        <div>
            <div style={{
                width: '100%',
                textAlign: 'left', 
                fontSize: '16px', 
                padding: '0 40px'
            }}>
                <h1>密码修改</h1>
                <Divider/>
            </div>
        </div>
    );
};

// 账号关联

export const AccountAssociated = (props) => {
    return (
        <div>
            <div style={{
                width: '100%',
                textAlign: 'left', 
                fontSize: '16px', 
                padding: '0 40px'
            }}>
                <h1>账号关联</h1>
                <Divider/>
            </div>
        </div>
    );
};

// 账号注销

export const AccountCancel = (props) => {
    return (
        <div>
            <div style={{
                width: '100%',
                textAlign: 'left', 
                fontSize: '16px', 
                padding: '0 40px'
            }}>
                <h1>账号注销</h1>
                <Divider/>
            </div>
        </div>
    );
};

export default User;