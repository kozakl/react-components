import {Checkbox} from '../../components/checkbox';
import React from 'react';
import style from './CheckboxSample.pcss';

export default function CheckboxSample()
{
    return (
        <div className={style.checkboxSample}>
            
            <Checkbox className={style.statement} error="DUPA">
                Oświadczam że zapoznałem się z&nbsp;
                <a className={style.terms}>
                    regulaminem
                </a>&nbsp;
                i akceptuję...
            </Checkbox>
        </div>
    );
}
