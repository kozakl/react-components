import * as React from 'react';
import * as style from './CustomCheckbox.pcss';
import {classNames} from '@kozakl/utils';

export default function CustomCheckbox(props:Props)
{
    return (
        <div className={props.className}>
            <input className={style.input} id="checkbox" type="checkbox"/>
            <label className={style.label} htmlFor="checkbox">
                Label&nbsp;
            </label>
        </div>
    );
}

interface Props {
    className?:string;
}
