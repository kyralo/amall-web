/*
* @Author: kyralo
* @Date:   2020-08-06 21:10:13
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-06 21:37:00
*/
import React from 'react';
import useTypewriter from "react-typewriter-hook";

const Typewriter = (props) => {
	const txt = useTypewriter(props.text);
	return (
		<div style={{
            whiteSpace: 'pre-line',
            textAlign: 'left'
		}}>
			{txt}
		</div>
	)
}

export default Typewriter;