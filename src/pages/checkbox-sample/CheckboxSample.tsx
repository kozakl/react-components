import {Checkbox} from '../../components/checkbox';
import {useCheckboxControl} from '../../hooks'
import React from 'react';
import style from './CheckboxSample.pcss';

export default function CheckboxSample()
{
    const checkbox1 = useCheckboxControl(true),
          checkbox2 = useCheckboxControl(false),
          checkbox3 = useCheckboxControl(false);
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
