import React from 'react';
import ReactDOM from 'react-dom';

import 'lib-flexible/flexible';

import './index.css';

import { history } from '@utils/history';

import {
  Route,
  Link,
  Redirect,
  Router, 
  Switch
} from 'react-router-dom';

import Layout from '@views/Layout';

import { routes } from '@router';
import renderRoutes from '@utils/renderRoutes';

const authed = false; // 如果登陆之后可以利用redux修改该值
const authPath = '/amall/error'; // 默认未登录的时候返回的页面，可以自行设置

ReactDOM.render(      
  <Router history={ history }>
    <Layout>
      <Switch>
        {renderRoutes(routes, authed, authPath)}
      </Switch>
    </Layout>
  </Router>
  ,document.getElementById('root')
);
