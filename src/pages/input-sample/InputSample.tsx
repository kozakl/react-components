import {TextField} from '../../components/text-field';
import React from 'react';
import style from './InputSample.pcss';

export default function SpinnerSample()
{
    return (
        <div className={style.spinnerSample}>
            <TextField placeholder="Imie"/>
            <TextField placeholder="Telefon (9 cyfr)"/>
        </div>
    );
}
