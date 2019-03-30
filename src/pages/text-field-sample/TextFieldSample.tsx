import {useTextFieldControl} from '@kozakl/hooks';
import {TextField} from '../../components/text-field';
import React from 'react';
import style from './TextFieldSample.pcss';

export default function TextFieldSample()
{
    const textField1 = useTextFieldControl(''),
          textField2 = useTextFieldControl(''),
          textField3 = useTextFieldControl(''),
          textField4 = useTextFieldControl(''),
          textField5 = useTextFieldControl(''),
          textField6 = useTextFieldControl('');
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
            
            {/*<TextField
                className={style.textField}
                placeholder={
                    <div className={style.fieldPlaceholder}>
                        Miesieczny dochód netto w gospodarstwie domowym:
                        <img src={require('res/icons/question-mark.svg')}/>
                    </div>}
                endAdornment={'END'}
                error={'Error sxee here'}
                open
                {...textField5}/>*/}
        </div>
    );
}
