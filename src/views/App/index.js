/*
* @Author: wangchen
* @Date:   2020-07-05 20:33:16
* @Last Modified by:   kyralo
* @Last Modified time: 2020-09-18 20:56:18
*/

import React from 'react';

import { useSize, UseRequestProvider } from 'ahooks';
import { Route,BrowserRouter,Switch,Redirect } from 'react-router-dom';

import axios from '@utils/axios';

import NotFound from '@comp/NotFound';
import Layout from '@views/Layout';
import Login from '@views/Login';
import Register from '@views/Register';

import { history } from '@utils/history';

const App = (props) => {

    return (
        <UseRequestProvider value={{
          refreshOnWindowFocus: true,
          requestMethod: (param)=> axios(param),
        }}>
            <BrowserRouter history={history}>
                <Switch>
                    <Route path={`/`} exact>
                        <Redirect to={`/amall/home`} />
                    </Route>
                    <Route path="/amall" component={Layout}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />

                    <Route exact path={`/notfound`} component={NotFound} />

                    <Redirect from={`/*`} to={`/notfound`} />
                </Switch>
            </BrowserRouter>
        </UseRequestProvider>
    )
}

export default App;