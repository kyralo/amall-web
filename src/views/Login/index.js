/*
* @Author: wangchen
* @Date:   2020-06-26 08:13:21
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-19 10:13:01
*/

import React, { useState }  from 'react';
import './style.css';

import { connect } from 'react-redux';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";

import { emailVerify } from '@utils/verify.js';

const Login = (props) => {

	const [ form ] = Form.useForm();

	const handleSubmit = e => {
		e.preventDefault();
		form.validateFields((err, values) => {
			if (!err) {
				if (emailVerify(values)) {
					alert('Your e-mail is not support!')
					return
				}
				
				// login
			}
		});
	};

    return (
		<div className="_login">
		  <Form onSubmit={e => handleSubmit(e)} className="login-form" style={{
	      	width: '500px',
	      	height: '300px',
	      	position: 'absolute',
	      	left: '50%',
	      	top: '50%',
	      	transform: 'translate(-55%, -70%)',
	      	padding: '50px 100px',
	      	border: '1px solid rgba(0,0,0,0.4)'
	      }}>
	        <Form.Item
				name='mail'
				rules={[{ required: true, message: 'Please input your e-mail!' }]}
	        >
				<Input
				  prefix={<UserOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,.25)' }}/>}
				  placeholder="E-Mail"
				/>
	        </Form.Item>
	        <Form.Item
				name='password'
				rules={[{ required: true, message: 'Please input your Password!' }]}
	        >
				<Input
					prefix={<LockOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,.25)' }}/>}
					type="password"
					placeholder="Password"
				/>
	        </Form.Item>
	        <Form.Item
				name='remember'
				valuePropName='checked'
				noStyle
	        >
				<Checkbox>Remember me</Checkbox>
				<a className="login-form-forgot" href="" style={{
					float: 'right'
				}}>
					Forgot password
				</a>
				<Button type="primary" htmlType="submit" className="login-form-button" style={{
					 width: '100%'
				}}>
					Login
				</Button>
				Or <Link to="/register">register now!</Link>
	        </Form.Item>
	      </Form>
		</div>
    );
}

export default Login;