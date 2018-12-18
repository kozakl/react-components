import * as React from 'react';
import * as style from './InputSample.pcss';
import {Input} from '../../components/text-field';

export default function SpinnerSample()
{
    return (
        <div className={style.spinnerSample}>
            <Input placeholder="Imie"/>
            <Input placeholder="Telefon (9 cyfr)"/>
        </div>
    );
}
