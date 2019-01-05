import {TextField} from '../../components/text-field';
import React from 'react';
import style from './TextFieldSample.pcss';

export default function TextFieldSample()
{
    return (
        <div className={style.spinnerSample}>
            <TextField placeholder="Imie"/>
            <TextField placeholder="Telefon (9 cyfr)"/>
        </div>
    );
}
