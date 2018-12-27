import {CrossfadeBg} from '../../components/crossfade-bg';
import React from 'react';
import style from './CrossfadeBgSample.pcss';

export default function CrossfadeBgSample()
{
    return (
        <div>
            <CrossfadeBg className={style.crossfadeBg}/>
        </div>
    );
}
