import React from 'react';
import {Route,IndexRoutes} from 'react-router';
import Template from '../containers/Template.js'
const createRoutes=()=>{
    return(
        <Route 
            path="/" 
            component={Template}
        
        >

        </Route>
    )
}

const Routes=createRoutes

export default Routes;