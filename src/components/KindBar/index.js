/*
* @Author: wangchen
* @Date:   2020-07-12 16:21:48
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-25 21:25:57
*/
import React,{ useState } from 'react';
import './style.less';

const arr=[
    {
        name: '上衣',
        sec: [
            { name: 'T恤' },
            { name: '时尚套装' },
            { name: '卫衣' },
        ]
    },
    {
        name: '裙子',
        sec: [
            { name: '连衣裙' },
            { name: '半身裙' },
            { name: '美裙套装' },
        ]
    },
    {
        name: '裤子',
        sec: [
            { name: '牛仔裤' },
            { name: '休闲裤' },
            { name: '运动裤' },
        ]
    },
    {
        name: '鞋子',
        sec: [
            { name: '单鞋' },
            { name: '休闲鞋' },
            { name: '布鞋' },
            { name: '运动鞋' },
        ]
    },
    {
        name: '内衣',
        sec: [
            { name: '睡衣' },
            { name: '内裤' },
        ]
    },
];

const KindBar = (props) => {

    const [ secKindList, setSecKindList ] = useState([]);

  return (
    <div className='_kind_bar'>
    	<div className='_pri_bar'>
            <div onClick={() => setSecKindList([])}>
                全部
            </div>
    		{
                arr.map((item,key) => (
                    <div onClick={() => setSecKindList(item.sec)}>
                        { item.name }
                    </div>
                ))
            }
    	</div>

        {
            secKindList.length === 0 ?
            null
            :
            <div className='_sec_bar'>
                <div>
                    全部
                </div>
                {
                    secKindList.map((item,key) => (
                        <div>
                            { item.name }
                        </div>
                    ))
                }
            </div>
        }


    	<div className="_options">
    		<div>综合</div>
    		<div>销量</div>
    		<div>新品</div>
    		<div className="_options_range_price">
    			<span><input type="text"/></span>
    			<span> - </span>
    			<span><input type="text"/></span>
    			<span><button>确定</button></span>
    		</div>
    	</div>
    </div>
  )
}

export default KindBar;