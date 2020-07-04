/*
* @Author: wangchen
* @Date:   2020-06-24 13:53:10
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-04 22:57:00
*/
import React, {
	useEffect,
	useReducer,
	useRef
} from 'react';

import { 
	useHover,
	useScroll,
	useSize,
	useMount,
	useUpdate  
} from 'ahooks';

import user, { defaultState } from '@store/user';
import { userDemo } from '@store/user/creators';

import './style.less';

import Slideshow from '@comp/Slideshow';

const Home = (props) => {

	const [state, dispatch] = useReducer(user,defaultState);
	const scroll = useScroll(document);
	const dom = document.querySelector('body');
	const size = useSize(dom);
	const update = useUpdate();

	useMount(() => {
	    console.log(state.user_info)
	});


	return (
		<div className='_home'>
		    <div>Time: {Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: 16 }}>
        update
      </button>
			<div onClick={() => {
				dispatch(userDemo({user_info: {avatarUrl: '222',name: '22'}}))
			}}>
				GOODS {state.user_info.name} {state.user_info.createTime}
			</div>

			<Slideshow/>
		      {
		      	scroll.top >= (size.height)*0.2 ? 
		      	<div>hello</div>
		      	:
		      	null  
		      }

	      <div>{size.height - scroll.top}</div>
	      <div>{JSON.stringify(size)}</div>

	      <div
	        style={{
	          height: '160px',
	          width: '160px',
	          border: 'solid 1px #000',
	          overflow: 'scroll',
	          whiteSpace: 'nowrap',
	          fontSize: '32px',
	        }}
	      >

	        <div>
	          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque, debitis ex
	          excepturi explicabo iste iure labore molestiae neque optio perspiciatis
	        </div>
	        <div>
	          Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A aspernatur assumenda
	          consequuntur culpa cumque dignissimos enim eos, et fugit natus nemo nesciunt
	        </div>
	        <div>
	          Alias aut deserunt expedita, inventore maiores minima officia porro rem. Accusamus ducimus
	          magni modi mollitia nihil nisi provident
	        </div>
	        <div>
	          Alias aut autem consequuntur doloremque esse facilis id molestiae neque officia placeat,
	          quia quisquam repellendus reprehenderit.
	        </div>
	        <div>
	          Adipisci blanditiis facere nam perspiciatis sit soluta ullam! Architecto aut blanditiis,
	          consectetur corporis cum deserunt distinctio dolore eius est exercitationem
	        </div>
	        <div>Ab aliquid asperiores assumenda corporis cumque dolorum expedita</div>
	        <div>
	          Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus distinctio dolore
	          earum, eum expedita facilis
	        </div>
	        <div>
	          Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis unde. Cumque
	          dignissimos distinctio, dolor eaque est fugit nisi non pariatur porro possimus, quas quasi
	        </div>
	      </div>
	    </div>
	)
}

export default Home;