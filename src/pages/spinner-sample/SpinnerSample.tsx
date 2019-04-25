import {Spinner} from '../../components/spinner';
import React from 'react';
import style from './SpinnerSample.pcss';

export default function SpinnerSample()
{
    return (
        <div className={style.spinnerSample}>
            <Spinner
                className={style.spinner}
                color="red"
                size="1.5em"/>
            <Spinner
                className={style.spinner}
                background="white"
                size="2rem"/>
            <Spinner className={style.spinner}/>
        </div>
    );
}
