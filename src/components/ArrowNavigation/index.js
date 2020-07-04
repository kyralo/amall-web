/*
* @Author: wangchen
* @Date:   2020-07-02 22:17:27
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-03 08:57:02
*/
import React from 'react';

import './style.less';

const ArrowNavigation = (props) => {
  return (
    <div>
		<section className="color-3">
			<h2>Circle Pop</h2>
			<nav className="nav-circlepop">
				<a className="prev">
					<span className="icon-wrap"></span>
				</a>
				<a className="next">
					<span className="icon-wrap"></span>
				</a>
			</nav>
		</section>
    </div>
  )
}

export default ArrowNavigation;