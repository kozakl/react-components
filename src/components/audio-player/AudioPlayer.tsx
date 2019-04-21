import {FunctionComponent,
        useEffect, useRef, useState} from 'react';
import {classNames} from '@kozakl/utils';
import {clamp} from '@kozakl/utils/math';
import React from 'react';
import style from './AudioPlayer.pcss';

const AudioPlayer:FunctionComponent<Props> = (props)=>
{
    const audio = useRef<HTMLAudioElement>(),
          bar = useRef<HTMLSpanElement>(),
          drag = useRef<boolean>();
    const [paused, setPaused] = useState(true),
          [percent, setPercent] = useState(0);
    
    useEffect(()=> {
        audio.current = document.createElement('audio');
        audio.current.src = 'https://sample-videos.com/audio/mp3/crowd-cheering.mp3';
        audio.current.addEventListener('timeupdate', onUpdateAudio);
        audio.current.addEventListener('ended', onEndAudio);
        audio.current.load();
        
        document.addEventListener('mouseup', onUp);
        document.addEventListener('mousemove', onMove);
        
        return ()=> {
            audio.current.removeEventListener('timeupdate', onUpdateAudio);
            audio.current.removeEventListener('ended', onEndAudio);
            audio.current.pause();
            audio.current = null;
            
            document.removeEventListener('mouseup', onUp);
            document.removeEventListener('mousemove', onMove);
        }
    }, []);
    
    function onUpdateAudio() {
        if (!drag.current) {
            setPercent(audio.current.currentTime * 100 / audio.current.duration);
        }
    }
    
    function onEndAudio() {
        setPaused(true);
        setPercent(0);
    }
    
    function onUp(event:MouseEvent) {
        if (drag.current) {
            drag.current = false;
            audio.current.currentTime = audio.current.duration * (barPercent(event) / 100);
        }
    }
    
    function onMove(event:MouseEvent) {
        if (drag.current) {
            setPercent(barPercent(event))
        }
    }
    
    function onClickControl()
    {
        if (audio.current.paused) {
            audio.current.play();
        } else {
            audio.current.pause();
        }
        setPaused(audio.current.paused);
    }
    
    function onDownBar(event:React.MouseEvent<HTMLSpanElement>) {
        drag.current = true;
        setPercent(barPercent(event))
    }
    
    function barPercent(event:MouseEvent | React.MouseEvent) {
        const rect = bar.current.getBoundingClientRect();
        return clamp((event.clientX - rect.left) / rect.width, 0, 1) * 100;
    }
    
    const audioPlayerClass = classNames(
        style.audioPlayer,
        props.className
    );
    return (
        <div className={audioPlayerClass}>
            <span
                className={style.control}
                onClick={onClickControl}>
                {paused ? '\ue901' : '\ue900'}
            </span>
            <span
                className={style.bar}
                ref={bar}
                onMouseDown={onDownBar}>
                <span
                    className={style.progress}
                    style={{width: percent + '%'}}/>
            </span>
        </div>
    );
};

interface Props {
    className?:string;
}

export default AudioPlayer;
