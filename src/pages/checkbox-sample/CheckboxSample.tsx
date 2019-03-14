import {Checkbox} from '../../components/checkbox';
import {useCheckboxChange} from '../../hooks'
import React from 'react';
import style from './CheckboxSample.pcss';

export default function CheckboxSample()
{
    const checkbox1 = useCheckboxChange(true),
          checkbox2 = useCheckboxChange(false),
          checkbox3 = useCheckboxChange(false);
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
                error="Error message"
                {...checkbox3}>
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
