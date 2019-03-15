import {Login} from '../../components/login';
import React from 'react';
import style from './LoginSample.pcss';

export default function LoginSample()
{
    return (
        <Login
            className={style.login}
            onLogin={null}/>
    );
}
