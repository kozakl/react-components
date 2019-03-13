import {Badge} from '../../components/badge';
import React from 'react';
import style from './BadgeSample.pcss';

export default function SpinnerSample()
{
    return (
        <div className={style.badgeSample}>
            <Badge className={style.badge}>
                0
            </Badge>
            <Badge className={style.badge}>
                00
            </Badge>
            <Badge className={style.badge}>
                000
            </Badge>
        </div>
    );
}
