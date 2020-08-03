/*
* @Author: wangchen
* @Date:   2020-07-26 19:36:43
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-26 23:37:59
*/
import React, { useState } from 'react';
import './style.less';

import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Button,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const UserAddress = (props) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="user_address"
      onFinish={onFinish}
      initialValues={{
        residence: [],
        prefix: '86',
      }}
      scrollToFirstError
    >

		<Form.Item
			name="residence"
			label="通常住址"
			rules={[
				{
					type: 'array',
					required: true,
					message: '请选择省/市/区!!!',
				},
			]}
		>
			<Cascader options={residences} style={{
			    width: '60%',
			}}/>
		</Form.Item>

		<Form.Item
			name="zip_code"
			label="邮政编码"
			rules={[
				{
					required: true,
					message: '请输入邮政编码!!!',
				},
			]}
		>
        	<Input style={{
			    width: '60%',
			}}/>
        </Form.Item>

		<Form.Item
			name="detailed_address"
			label="详细地址"
			rules={[
				{
					required: true,
					message: '请输入详细地址!!!',
				},
			]}
		>
			<Input.TextArea style={{
			    width: '60%',
			}} placeholder="xxx 镇 xxx 村 ..." autoSize={{ minRows: 3, maxRows: 8 }} />
        </Form.Item>

		<Form.Item
			name="name"
			label="收件人姓名"
			rules={[
				{
					required: true,
					message: '请输入收件人姓名!!!',
				},
			]}
		>
        	<Input style={{
			    width: '60%',
			}}/>
        </Form.Item>
      
		<Form.Item
			name="phone"
			label="收件人手机号"
			rules={[
			  {
			    required: true,
			    message: '请输入收件人手机号!!!',
			  },
			]}
		>
			<Input
			  addonBefore={prefixSelector}
			  style={{
			    width: '60%',
			  }}
			/>
		</Form.Item>

		<div style={{width: '100%',textAlign: 'center', display: 'inline-flex', flexFlow: 'row nowrap'}}>
			<div style={{width: '50%'}}>
				<Button type="primary" htmlType="submit" style={{width: '50%'}}>
					添加
				</Button>
			</div>
			<div style={{width: '50%'}}>
				<Button type="primary" style={{width: '50%'}} onClick={() => props.setAdd(false)}>
					取消
				</Button>
			</div>
		</div>
    </Form>
  );
};

export default UserAddress;