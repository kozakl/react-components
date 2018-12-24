import * as React from 'react';
import * as style from './BadgeSample.pcss';
import {Badge} from '../../components/badge';

export default function SpinnerSample()
{
    return (
        <div className={style.badgeSample}>
            <Badge>0</Badge>
            <Badge>00</Badge>
            <Badge>000</Badge>
        </div>
    );
}
