import {CSSProperties, memo,
        MouseEvent, TransitionEvent,
        useEffect, useState} from 'react';
import {useResize} from '@kozakl/hooks';
import {matchSrcSet} from '@kozakl/utils/video';
import React from 'react';

const VideoLite = memo((props:Props)=> {
    const [src, setSrc] = useState<string>(),
          [poster] = useState(typeof window != 'undefined' &&
              props.thumb && new Image());
    
    useEffect(()=> {
        setSrc(matchSrcSet(props.srcSet, window.innerWidth));
        if (props.thumb) {
            poster.src = props.thumb;
            poster.onload = ()=>
                props.onLoadThumb &&
                    props.onLoadThumb();
        }
    }, []);
    
    useResize(()=>
        setSrc(matchSrcSet(props.srcSet, window.innerWidth)));
    
    return (
        <video
            className={props.className}
            id={props.id}
            style={props.style}
            src={src}
            poster={props.thumb}
            autoPlay={props.autoPlay}
            controls={props.controls}
            loop={props.loop}
            muted={props.muted}
            playsInline={props.playsInline}
            onClick={props.onClick}
            onTransitionEnd={props.onTransitionEnd}/>
    );
});

interface Props {
    className?:string;
    id?:string;
    thumb?:string;
    srcSet:string;
    style?:CSSProperties;
    autoPlay?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsInline?:boolean;
    onClick?:(event:MouseEvent<HTMLVideoElement>)=> void;
    onTransitionEnd?:(event:TransitionEvent<HTMLVideoElement>)=> void;
    onLoadThumb?:()=> void;
}

export default VideoLite;
