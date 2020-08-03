/*
* @Author: 王宸
* @Date:   2019-12-23 17:13:35
* @Last Modified by:   wangchen
* @Last Modified time: 2020-08-03 17:45:57
*/


import NotFound from '@comp/NotFound';

import Home from '@views/Home';
import Kind from '@views/Kind';
import Commodity from '@views/Commodity';
import User from '@views/User';
import Cart from '@views/Cart';
import Seckill from '@views/Seckill';
import Order from '@views/Order';
import Pay from '@views/Pay';
import Merchant from '@views/Merchant';

const routes = [
    {
        path: '/home',
        component: Home,
        exact: false,
        requiresAuth: false, //需要登陆后才能跳转的页面
    },

    {
        path: '/kind',
        component: Kind,
        requiresAuth: false,
    },

    {
        path: '/co',
        component: Commodity,
        requiresAuth: false,
    },

    {
        path: '/user',
        component: User,
        requiresAuth: false,
    },

    {
        path: '/cart',
        component: Cart,
        requiresAuth: false,
    },

    {
        path: '/seckill',
        component: Seckill,
        requiresAuth: false,
    },

    {
        path: '/order',
        component: Order,
        requiresAuth: false,
    },  

    {
        path: '/pay',
        component: Pay,
        requiresAuth: false,
    },  

    {
        path: '/merchant',
        component: Merchant,
        requiresAuth: false,
    },

    {
		path: '/error',
		component: NotFound,
		requiresAuth: false,
	}
    // {
    //     path: '/advantage',
    //     component: FyAdvantage,
    //     children: [
    //         {
    //             path: '/advantage/advantage1',
    //             component: FyAdvantageOne
    //         },
    //         {
    //             path: '/advantage/advantage2',
    //             component: FyAdvantageTwo
    //         },
    //         {
    //             path: '/advantage/advantage3',
    //             component: FyAdvantageThree
    //         }
    //     ]
    // },
    // {
    //     path: '/faq',
    //     component: FyCommonProblem
    // },
];
 
export {routes}