import {AudioPlayer} from '../../components/deprecated/audio-player';
import React from 'react';
import style from './AudioPlayerSample.pcss';

export default function AudioPlayerSample()
{
    return (
        <div className={style.audioPlayerSample}>
            <AudioPlayer className={style.audioPlayer}/>
        </div>
    );
}
