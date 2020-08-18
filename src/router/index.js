/*
* @Author: 王宸
* @Date:   2019-12-23 17:13:35
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-18 23:04:42
*/

import Home from '@views/Home';
import Kind from '@views/Kind';
import Commodity from '@views/Commodity';
import User, { 
    UserInfo, Address, UserNotPayOrder, 
    UserPayOrder, UserShopCollection, Password, 
    AccountAssociated, AccountCancel 
} from '@views/User';
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
        exact: false,
        requiresAuth: false,
    },

    {
        path: '/co',
        component: Commodity,
        exact: false,
        requiresAuth: false,
    },

    {
        path: '/user',
        component: User,
        exact: false,
        requiresAuth: false,
    },

    {
        path: '/cart',
        component: Cart,
        exact: true,
        requiresAuth: false,
    },

    {
        path: '/seckill',
        component: Seckill,
        exact: false,
        requiresAuth: false,
    },

    {
        path: '/order',
        component: Order,
        exact: true,
        requiresAuth: false,
    },  

    {
        path: '/pay',
        component: Pay,
        exact: true,
        requiresAuth: false,
    },  

    {
        path: '/merchant',
        component: Merchant,
        exact: false,
        requiresAuth: false,
    },
];

const userRoutes = [
    {
        path: '/info',
        component: UserInfo,
        exact: true,
        requiresAuth: false,
    },

    {
        path: '/address',
        component: Address,
        exact: true,
        requiresAuth: false,
    },

    {
        path: '/order/notpay',
        component: UserNotPayOrder,
        exact: true,
        requiresAuth: false,
    },

    {
        path: '/order/pay',
        component: UserPayOrder,
        exact: true,
        requiresAuth: false,
    },

    {
        path: '/collection/shop',
        component: UserShopCollection,
        exact: true,
        requiresAuth: false,
    },

    {
        path: '/security/password',
        component: Password,
        exact: true,
        requiresAuth: false,
    },

    {
        path: '/security/associate',
        component: AccountAssociated,
        exact: true,
        requiresAuth: false,
    },

    {
        path: '/security/cancel',
        component: AccountCancel,
        exact: true,
        requiresAuth: false,
    },     
];
 
export { routes, userRoutes };