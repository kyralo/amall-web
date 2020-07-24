/*
* @Author: 王宸
* @Date:   2019-12-28 15:46:34
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-23 00:45:42
*/

import { createStore, applyMiddleware, compose  } from 'redux';
import reducer from './reducer';
import { routerMiddleware } from 'react-router-redux';

// import saga from './saga';
// import createSagaMiddleware from 'redux-saga';

// const sagaMiddleware = createSagaMiddleware();

const createHistory = require('history').createHashHistory;
//初始化history
const history = createHistory(); 
const routerWare = routerMiddleware(history);


const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
    	// sagaMiddleware,
    	routerWare
	),

);

const store = createStore(
	reducer,
	enhancer
);

// sagaMiddleware.run(saga);

export default store;