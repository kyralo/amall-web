/*
* @Author: wangchen
* @Date:   2020-07-15 20:35:12
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-17 00:22:37
*/
import React, { useState } from 'react';
import './style.less';

// 文字
const Str = (props) => (
		<div style={{
			fontSize: '18px',
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
const ArrayObjectStr = (props) => (
	<div style={{
		fontSize: '18px',
		padding: '5px 10px',
		display: 'inline-flex',
		flexFlow: 'row wrap',
	}}>
		{
			props.items.map((item,key) => (
				<div style={{
					border: '1px solid #000',
					padding: '10px 10px'
				}} key={key}>
					<span>{item.name}</span>
					<span> : </span>
					<span>{item.value}</span>
				</div>
			))
		}
	</div>
);

// 尺码
const ArrayObjectArray = (props) => (
	<table style={{
		fontSize: '18px',
		padding: '5px 10px',
		textAlign: 'center'
	}}>
		<tr style={{
			width: '100%',
			// display: 'inline-flex',
			// flexFlow: 'row nowrap',
			// justifyContent: 'space-around'
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
					// display: 'inline-flex',
					// flexFlow: 'row nowrap',
					// justifyContent: 'space-around'
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
		console.log(props)
		if (typeof props.items === 'string') {
			console.log(props)
			return (<Str items={props.items}/>);
		} 

		if (props.items instanceof Array) {
			if (props.items.length <= 0) {
				return null;
			}

			if (typeof props.items[0] === 'string') {
				return (<ArrayStr items={props.items}/>);
			}

			if (props.items[0].name) {
				return (<ArrayObjectStr items={props.items}/>);
			}
		}

		if (props.items instanceof Object) {
			if (props.items.title) {
				return (<ArrayObjectArray items={props.items}/>);
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