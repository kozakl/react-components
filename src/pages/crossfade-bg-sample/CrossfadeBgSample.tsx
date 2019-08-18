import {CrossfadeBg} from '../../components/crossfade-bg';
import React from 'react';

export default function CrossfadeBgSample()
{
    return (
        <CrossfadeBg
            images={[
                'assets/backgrounds/image1/',
                'assets/backgrounds/image2/'
            ]}/>
    );
}
