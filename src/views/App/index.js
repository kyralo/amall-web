/*
* @Author: wangchen
* @Date:   2020-07-05 20:33:16
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-23 00:05:14
*/

import React, {
    Suspense,
    useReducer,
} from 'react';

import {useSize, UseRequestProvider} from 'ahooks';
import {BrowserRouter, Switch} from 'react-router-dom';

import Layout from '@views/Layout';

import {routes} from '@router';
import renderRoutes from '@utils/renderRoutes';
import axios from '@utils/axios';

import common, * as reducer from '@store/common';

const Loading = React.lazy(() => import('@comp/Loading'));
const authPath = '/home';

const App = (props) => {
    const [state, dispatch] = useReducer(common, reducer.defaultState);
    let authed = !(state.token || state.token === '' || state.token == null);

    return (
        <UseRequestProvider value={{
          refreshOnWindowFocus: true,
          requestMethod: (param)=> axios(param),
        }}>
            <BrowserRouter>
                <Layout>
                    <Suspense fallback={<Loading/>}>
                        <Switch>
                            {renderRoutes(routes, authed, authPath)}
                        </Switch>
                    </Suspense>
                </Layout>
            </BrowserRouter>
        </UseRequestProvider>
    )
}

export default App;