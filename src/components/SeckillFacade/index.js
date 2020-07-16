/*
* @Author: wangchen
* @Date:   2020-07-07 17:30:39
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-14 21:27:21
*/
import React, {
	useState,
	useEffect
} from 'react';

import './style.less';

import { Statistic } from 'antd';
import moment from 'moment';
import { AIcon } from '@utils/icon';

const { Countdown } = Statistic;

const SeckillFacade = (props) => {

	const [secTimeField, setSecTimeField] = useState({
		field: props.field
	});
	// const [secTime, setSecTime] = useState({
	// 	hours: '00',
	// 	minutes: '00',
	// 	seconds: '00'
	// });

	// const timeHandler = (value) => {
	// 	if (value <= 0) {
	// 		return '00';
	// 	}

	// 	if (value < 10) {
	// 		return '0' + String(value);
	// 	}
	// 	return String(value);
	// }

	// useEffect(()=>{
	// 	let timer = 0;
	// 	timer = setInterval(() => {
	// 		// 这时候的count由于闭包的原因，一直是0，所以这里不能用setCount(count-1)
	// 		let now = moment();
	// 	 	const t = moment(props.current.secDate);
	// 		let dura = t.format('x') - now.format('x');
	// 		let tempTime = moment.duration(dura);

	// 		let day = tempTime.days();
	// 		let hour = tempTime.hours();
	// 		let minute = tempTime.minutes();
	// 		let seconds = tempTime.seconds();
			
	// 		// console.log(timeHandler(day), timeHandler(hour), timeHandler(minute), timeHandler(seconds))
	// 		setSecTime(n => {
	// 			return {
	// 				hours: timeHandler(hour),
	// 				minutes: timeHandler(minute),
	// 				seconds: timeHandler(seconds)
	// 			}
	// 		});

	// 		if (now > t) {
	// 			// 组件销毁时，清除定时器
	// 			clearInterval(timer)
	// 			// 重新请求服务器获取新的秒杀定单任务
	// 			// setSecTimeField({
	// 			// 	field: seckillState.currentSeckill.secTimeField
	// 			// });
	// 		}
	// 	}, 1000);
	//     return () => {
	//       // 组件销毁时，清除定时器
	//       clearInterval(timer)
	//     };
	// },[secTime]);

	return (
		<div className="_seckill_facade">
			<div className="_seckill_facade_title">
				今日必抢
			</div>
			<div className="_seckill_facade_time_icon">
				<AIcon type='icon-amall-shandian'/>
			</div>
			<div className="_seckill_facade_time_info">
				<div className="_seckill_facade_time_title">
					{secTimeField.field} 点场 倒计时
				</div>
				
				<div className="_seckill_facade_time">
					<Countdown style={{
						width: '100%',
						fontSize: '12px'
					}} value={props.current.secDate} format="HH:mm:ss:SSS" />
					{/*
						<div>{secTime.hours}</div>
						<div><h4 style={{
							color: '#FFF',
						}}>:</h4></div>
						<div>{secTime.minutes}</div>
						<div><h4 style={{
							color: '#FFF',
						}}>:</h4></div>
						<div>{secTime.seconds}</div>  
					*/}
				</div>
			</div>
		</div>
	)
}

export default SeckillFacade;