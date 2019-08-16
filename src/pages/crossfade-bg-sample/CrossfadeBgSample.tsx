import {CrossfadeBg} from '../../components/crossfade-bg';
import React from 'react';

export default function CrossfadeBgSample()
{
    return (
        <CrossfadeBg
            images={[
                'assets/bg1/', 'assets/bg2/'
            ]}/>
    );
}
