import {FunctionComponent,
        useEffect, useState} from 'react';
import {Redirect, Route,
        RouteProps} from 'react-router';
import {auth} from '../../actions';
import React from 'react';

const PrivateRoute:FunctionComponent<RouteProps> = ({component: Component})=>
{
    const [session, setSession] = useState(null);
    useEffect(()=> {
        auth().then((result)=>
            setSession(result));
    }, []);
    
    return session && 
        <Route
            render={(props)=>
                session.auth ?
                <Component {...props}/> :
                <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}/>
};

export default PrivateRoute;
