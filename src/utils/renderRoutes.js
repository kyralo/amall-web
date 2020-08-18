/*
* @Author: wangchen
* @Date:   2020-06-25 16:41:40
* @Last Modified by:   kyralo
* @Last Modified time: 2020-08-18 23:25:35
*/
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NotFound from '@comp/NotFound';

const urlmatch = (url1,url2) => { return url1+url2 };

const routeCob = (prePath,route) => {
  route.path = prePath;
  return route;
};

const authPath = '/login';

const renderSwitchRoutes = (routes, authed, props, fromPath = '/', toPath = '', extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps}>

    {routes.map((route, i) => (

      <Route
        key={route.key || i}
        path={urlmatch(props.match.path,route.path,route)}
        exact={route.exact ? route.exact: false}
        render={
            props =>{
                return (!route.requiresAuth || authed || route.path === authPath)?
                <Route component={route.component} {...props}/> : <Redirect to='/login'/>
            }
        }
      />
    ))}
     {toPath !== '' ? <Redirect from={`${fromPath}`} to={`${toPath}`} /> : null}
  </Switch>
) : null;

const renderRoutes = (routes, authed, props, fromPath = '/', toPath = '', extraProps = {}, switchProps = {}) => routes ? (
  <React.Fragment>

    {routes.map((route, i) => (

      <Route
        key={route.key || i}
        path={urlmatch(props.match.path,route.path,route)}
        exact={route.exact ? route.exact: false}
        render={
            props =>{
                return (!route.requiresAuth || authed || route.path === authPath)?
                <Route component={route.component} {...props}/> : <Redirect to='/login'/>
            }
        }
      />
    ))}

    {toPath !== '' ? <Redirect from={`${fromPath}`} to={`${toPath}`} /> : null}
  </React.Fragment>
) : null;

export { renderSwitchRoutes, renderRoutes };


// //登陆之后返回原先要去的页面login函数
// login(){
//     const { from } = this.props.location.state || { from: { pathname: '/' } }
//      // authed = true // 这部分逻辑自己写吧。。。
//     this.props.history.push(from.pathname)
// }