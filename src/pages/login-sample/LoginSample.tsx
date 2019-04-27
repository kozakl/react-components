import {Login} from '../../components/login';
import React from 'react';
import style from './LoginSample.pcss';

export default function LoginSample()
{
    return (
        <div className={style.loginSample}>
            <Login
                className={style.login}
                onLogin={null}/>
        </div>
    );
}
