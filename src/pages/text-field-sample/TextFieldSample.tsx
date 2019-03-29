import {useTextFieldControl} from '@kozakl/hooks';
import {TextField} from '../../components/text-field';
import React from 'react';
import style from './TextFieldSample.pcss';

export default function TextFieldSample()
{
    const textField1 = useTextFieldControl(''),
          textField2 = useTextFieldControl(''),
          textField3 = useTextFieldControl('');
    return (
        <div className={style.textFieldSample}>
            <TextField
                className={style.textField1}
                placeholder="Imie Imie Imie Imie Imie Imie"
                {...textField1}/>
            <TextField
                className={style.textField2}
                placeholder="Telefon (9 cyfr)"
                endAdornment={'END'}
                {...textField2}/>
            <TextField
                className={style.textField3}
                placeholder={
                    <div className={style.fieldPlaceholder}>
                        Miesieczny dochód netto w gospodarstwie domowym:
                        <img src={require('res/icons/question-mark.svg')}/>
                    </div>}
                endAdornment={'END'}
                open
                {...textField3}/>
        </div>
    );
}
