/*
* @Author: wangchen
* @Date:   2020-07-06 21:03:29
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-10 13:57:51
*/

export const oneToTwoArr = (array,value) => {
		let firLength = Math.floor(array.length / value);
		let newArr = []

		if (firLength === 0) {
			newArr.push(array);
			return newArr;
		}

		for (let i = 0; i < firLength; i++) {
			newArr.push(array.slice(i*value,(i+1)*value));
		}

		newArr.push(array.slice((firLength)*value,array.length)); 

		return newArr;
}