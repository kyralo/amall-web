/*
* @Author: wangchen
* @Date:   2020-07-15 20:35:12
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-19 17:01:32
*/
import React, { useState } from 'react';
import './style.less';

import { Descriptions } from 'antd';

// 文字
const Str = (props) => (
		<div style={{
			fontSize: '16px',
			padding: '5px 10px'
		}}>
			<p>
				{props.items}
			</p>
		</div>
);

// 图片
const ArrayStr = (props) => (
	<div style={{
		textAlign: 'center'
	}}>
		{
			props.items.map((item,key) => (
				<div key={key}>
					<img src={item} alt={key}/>
				</div>
			))
		}
	</div>
);

// 参数
// const ArrayObjectStr = (props) => (
// 	<div style={{
// 		fontSize: '16px',
// 		padding: '5px 10px',
// 		display: 'inline-flex',
// 		flexFlow: 'row wrap',
// 	}}>
// 		{
// 			props.items.map((item,key) => (
// 				<div style={{
// 					border: '1px solid #000',
// 					padding: '10px 10px'
// 				}} key={key}>
// 					<span>{item.name}</span>
// 					<span> : </span>
// 					<span>{item.value}</span>
// 				</div>
// 			))
// 		}
// 	</div>
// );

const ArrayObjectStr = (props) => (
	<div style={{
		fontSize: '16px',
		padding: '5px 10px',
		display: 'inline-flex',
		flexFlow: 'row wrap',
		textAlign: 'center'
	}}>
		<Descriptions layout="vertical" bordered>
		{
			props.items.map((item,key) => (
				<Descriptions.Item key={key} label={<div style={{
					margin: '0 auto',
					textAlign: 'center'
				}}>{item.name}</div>}>{item.value}</Descriptions.Item>
			))
		}
		</Descriptions>
	</div>
);

// 尺码
const ArrayObjectArray = (props) => (
	<table style={{
		width: '90%',
		fontSize: '16px',
		padding: '5px 10px',
		textAlign: 'center'
	}}>
		<tbody>
			<tr style={{
				width: '100%',
			}}>
				{
					props.items.title.map((item,key) => (
						<th style={{
							border: '1px solid #000',
							padding: '5px 10px'
						}} key={key}>{item}</th>
					))
				}
			</tr>

			{
				props.items.columns.map((item,key) => (
					<tr key={key} style={{
						width: '100%',
					}}>
						{
							item.map((item1,key1) => (
								<td style={{
									border: '1px solid #000',
									padding: '5px 10px'
								}} key={key1}>{item1}</td>
							))
						}
					</tr>
				))
			}
		</tbody>
	</table>
);

/*
	'' // 描述
	{  // 产品参数
		name: ''   // title: []
		value: ''  // columns: [
						{
							column: [
							]
						}
					  ]
	}
	[  // 图片
		''
	]
 */

const oeg = {
	items: [
	]
};

const ProductDetails = (props) => {
	const Handler = () => {
		if (typeof props.items === 'string') {
			return (<Str {...props}/>);
		} 

		if (props.items instanceof Array) {
			if (props.items.length <= 0) {
				return null;
			}

			if (typeof props.items[0] === 'string') {
				return (<ArrayStr {...props}/>);
			}

			if (props.items[0].name) {
				return (<ArrayObjectStr {...props}/>);
			}
		}

		if (props.items instanceof Object) {
			if (props.items.title) {
				return (<ArrayObjectArray {...props}/>);
			}
		}

		return null;
	};

  return (
    <div>
		<Handler/>
    </div>
  )
}

export default ProductDetails;