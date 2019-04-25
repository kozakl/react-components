import {useCheckbox} from '@kozakl/hooks';
import {Checkbox} from '../../components/checkbox';
import React from 'react';
import style from './CheckboxSample.pcss';

export default function CheckboxSample()
{
    const checkbox1 = useCheckbox(true),
          checkbox2 = useCheckbox(false);
    return (
        <div className={style.checkboxSample}>
            <Checkbox
                className={style.checkbox}
                {...checkbox1}>
                Checked option
            </Checkbox>
            <Checkbox
                className={style.checkbox}
                {...checkbox2}>
                Unchecked option
            </Checkbox>
            <Checkbox
                className={style.checkbox}
                error="Error message">
                Error checkbox
            </Checkbox>
            <Checkbox
                className={style.checkbox}
                disabled>
                Disabled checkbox
            </Checkbox>
        </div>
    );
}
