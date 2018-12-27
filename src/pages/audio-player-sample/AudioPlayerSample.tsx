import {AudioPlayer} from '../../components/audio-player';
import React from 'react';
import style from './AudioPlayerSample.pcss';

export default function AudioPlayerSample()
{
    return (
        <AudioPlayer className={style.audioPlayer}/>
    );
}
