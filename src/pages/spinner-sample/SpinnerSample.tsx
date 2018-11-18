import * as React from 'react';
import * as style from './SpinnerSample.pcss';
import {Spinner} from '../../components/spinner';

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
