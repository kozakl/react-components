import * as React from 'react';
import * as style from './CheckboxSample.pcss';
import {CustomCheckbox} from '../../components/custom-checkbox';

export default function CheckboxSample()
{
    return (
        <div className={style.checkboxSample}>
            <CustomCheckbox className={style.checkbox}/>
        </div>
    );
}
