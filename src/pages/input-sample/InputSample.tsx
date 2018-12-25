import * as React from 'react';
import * as style from './InputSample.pcss';
import {TextField} from '../../components/text-field';

export default function SpinnerSample()
{
    return (
        <div className={style.spinnerSample}>
            <TextField placeholder="Imie"/>
            <TextField placeholder="Telefon (9 cyfr)"/>
        </div>
    );
}
