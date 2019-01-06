import {Badge} from '../../components/badge';
import React from 'react';
import style from './BadgeSample.pcss';

export default function SpinnerSample()
{
    return (
        <div className={style.badgeSample}>
            <Badge className={style.badge1}>
                0
            </Badge><br/>
            <Badge>00</Badge><br/>
            <Badge>000</Badge>
        </div>
    );
}
