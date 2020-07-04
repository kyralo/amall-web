/*
* @Author: 王宸
* @Date:   2019-12-23 17:13:35
* @Last Modified by:   wangchen
* @Last Modified time: 2020-06-25 18:29:00
*/


import NotFound from '@comp/NotFound';
import Home from '@views/Home';


const routes = [
    {
        path: '/amall/home',
        component: Home,
        exact: true,
        requiresAuth: false, //需要登陆后才能跳转的页面
    },
    {
        path: '/amall/error',
        component: NotFound,
        requiresAuth: true, //需要登陆后才能跳转的页面
        exact: true,
    },
    {
		path: '/amall/home/error',
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