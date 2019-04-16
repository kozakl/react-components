import {useTextField} from '@kozakl/hooks';
import {TextField} from '../../components/text-field';
import React from 'react';
import style from './TextFieldSample.pcss';

export default function TextFieldSample()
{
    const textField1 = useTextField(''),
          textField2 = useTextField(''),
          textField3 = useTextField(''),
          textField4 = useTextField(''),
          textField5 = useTextField('');
    return (
        <div className={style.textFieldSample}>
            <TextField
                className={style.textField}
                placeholder="Lorem ipsum dolor sit amet consectetur adipiscing"
                {...textField1}/>
            <TextField
                className={style.textField}
                placeholder="Lorem ipsum dolor sit amet consectetur adipiscing"
                startAdornment="$$$"
                {...textField2}/>
            <TextField
                className={style.textField}
                placeholder="Lorem ipsum dolor sit amet consectetur adipiscing"
                endAdornment="USD"
                {...textField3}/>
            <TextField
                className={style.textField}
                placeholder="Lorem ipsum dolor sit amet consectetur adipiscing"
                startAdornment="$$$"
                endAdornment="USD"
                {...textField4}/>
            <TextField
                className={style.textField}
                placeholder="Lorem ipsum dolor sit amet consectetur adipiscing"
                {...textField5}
                error="Lorem ipsum dolor sit amet consectetur adipiscing"/>
            <TextField
                className={style.textField}
                placeholder="Lorem ipsum dolor sit amet consectetur adipiscing"
                value="Lorem ipsum dolor sit amet consectetur adipiscing"
                error="Lorem ipsum dolor sit amet consectetur adipiscing"
                opened
                disabled/>
        </div>
    );
}
