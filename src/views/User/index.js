/*
* @Author: wangchen
* @Date:   2020-07-20 09:56:59
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-27 00:16:05
*/
import React, {useState} from 'react';
import './style.less';

import {
    Layout, 
    Menu, 
    Anchor, 
    Upload, 
    Radio,
    List,
    Tooltip,
    Drawer
} from 'antd';

import ImgCrop from 'antd-img-crop';
import {AIcon} from '@utils/icon';

import UserAddress from '@views/UserAddress';

const {SubMenu} = Menu;
const {Content, Footer, Sider} = Layout;

const User = (props) => {

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
                                <span>基本信息</span>
                            </Menu.Item>
                            <Menu.Item key="sub2" icon={<AIcon style={{fontSize: '18px'}} type="icon-amall-gouwuche"/>}>
                                <span>购物车</span>
                            </Menu.Item>
                            <SubMenu key="sub3" icon={<AIcon style={{fontSize: '18px'}} type="icon-amall-dingdan"/>}
                                     title={<span>订单管理</span>}>
                                <Menu.Item key="sub3-1"><span>待付款</span></Menu.Item>
                                <Menu.Item key="sub3-2"><span>交易历史</span></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" icon={<AIcon style={{fontSize: '18px'}} type="icon-amall-collection"/>}
                                     title={<span>我的收藏</span>}>
                                <Menu.Item key="sub4-1"><span>店铺收藏</span></Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub5" icon={<AIcon style={{fontSize: '18px'}} type="icon-amall-didian"/>}
                                     title={<span>地址管理</span>}>
                                <Menu.Item key="sub5-1"><span>配送地址</span></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub6" icon={<AIcon style={{fontSize: '18px'}} type="icon-amall-anquan"/>}
                                     title={<span>安全设置</span>}>
                                <Menu.Item key="sub6-1"><span>设置密码</span></Menu.Item>
                                <Menu.Item key="sub6-2"><span>账号关联</span></Menu.Item>
                                <Menu.Item key="sub6-3"><span>账号注销</span></Menu.Item>
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
                                <Address/>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Content>
        </div>
    )
}

const UserInfo = (props) => {
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

const data = [0,1,2,3,4];
const Address = (props) => {

    const [add,setAdd] = useState(false);

    return (
        <div>
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
}

const Password = (props) => {

    return (
        <div></div>
    );
}

export default User;