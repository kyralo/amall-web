/*
* @Author: wangchen
* @Date:   2020-07-05 20:33:16
* @Last Modified by:   wangchen
* @Last Modified time: 2020-07-17 19:05:44
*/

import React, {
    Suspense,
    useReducer,
} from 'react';

import {useSize} from 'ahooks';

import {BrowserRouter, Switch} from 'react-router-dom';

import Layout from '@views/Layout';

import {routes} from '@router';
import renderRoutes from '@utils/renderRoutes';

import common, * as reducer from '@store/common';

const Loading = React.lazy(() => import('@comp/Loading'));
const authPath = '/home';

const App = (props) => {
    const [state, dispatch] = useReducer(common, reducer.defaultState);
    let authed = !(state.token || state.token === '' || state.token == null);

    return (
        <BrowserRouter>
            <Layout>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        {renderRoutes(routes, authed, authPath)}
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    )
}

export default App;