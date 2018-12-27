import {Spinner} from '../../components/spinner';
import React from 'react';
import style from './SpinnerSample.pcss';

export default function SpinnerSample()
{
    return (
        <div className={style.spinnerSample}>
            <Spinner color="red" size="1.5em"/>
            <Spinner background="white" size="2rem"/>
            <Spinner/>
        </div>
    );
}
