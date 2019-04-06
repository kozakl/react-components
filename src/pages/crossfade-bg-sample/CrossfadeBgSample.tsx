import {CrossfadeBg} from '../../components/crossfade-bg';
import React from 'react';
import style from './CrossfadeBgSample.pcss';

export default function CrossfadeBgSample()
{
    return (
        <CrossfadeBg
            className={style.crossfadeBg}
            images={[
                'assets/bg1/', 'assets/bg2/'
            ]}/>
    );
}
