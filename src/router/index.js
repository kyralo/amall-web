/*
* @Author: 王宸
* @Date:   2019-12-23 17:13:35
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-14 11:35:53
*/


import NotFound from '@comp/NotFound';

import Home from '@views/Home';
import Kind from '@views/Kind';
import Commodity from '@views/Commodity';

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