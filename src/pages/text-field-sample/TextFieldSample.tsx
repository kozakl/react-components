import {TextField} from '../../components/text-field';
import React from 'react';
import style from './TextFieldSample.pcss';

export default function TextFieldSample()
{
    return (
        <div className={style.textFieldSample}>
            <TextField
                className={style.textField1}
                placeholder="Imie Imie Imie Imie Imie Imie"/>
            <TextField
                className={style.textField2}
                placeholder="Telefon (9 cyfr)"/>
        </div>
    );
}
