import {Badge} from '../../components/badge';
import React from 'react';
import style from './BadgeSample.pcss';

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
