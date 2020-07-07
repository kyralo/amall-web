/*
* @Author: wangchen
* @Date:   2020-07-05 11:56:07
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-05 12:00:39
*/

import React from 'react';

import { Sticky, StickyContainer } from 'react-sticky';


const TitleSticky = (props) => {
	const containerBg = i => `hsl(${i * 40}, 70%, 90%)`;
	const headerBg = i => `hsl(${i * 40}, 70%, 50%)`;



  return (
    <div>
		<StickyContainer
			className="container"
			style={{ background: containerBg(1) }}
		>
		<Sticky>
			
			{({ style }) => (					
				<h1 style={{ ...style, background: headerBg(1) }}>title</h1>
			)}

		</Sticky>
			<div className="text-center">9090909090</div>
		</StickyContainer>
    </div>
  )
}

export default TitleSticky;