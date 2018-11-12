import * as React from 'react';
import * as style from './AudioPlayerSample.pcss';
import {AudioPlayer} from '../../components/audio-player';

export default function AudioPlayerSample()
{
    return (
        <div>
            <AudioPlayer className={style.audioPlayer}/>
        </div>
    );
}
