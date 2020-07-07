/*
* @Author: wangchen
* @Date:   2020-06-25 16:41:40
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-05 16:42:18
*/
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '@views/Home';

const renderRoutes = (routes, authed, authPath = '/login', extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps}>
    {routes.map((route, i) => (

      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          if (!route.requiresAuth || authed || route.path === authPath) {
            return <route.component {...props} {...extraProps} route={route} />
          }
          return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
        }}
      />
    ))}

    <Redirect push to="/home"/>
  </Switch>
) : null

export default renderRoutes;


// //登陆之后返回原先要去的页面login函数
// login(){
//     const { from } = this.props.location.state || { from: { pathname: '/' } }
//      // authed = true // 这部分逻辑自己写吧。。。
//     this.props.history.push(from.pathname)
// }