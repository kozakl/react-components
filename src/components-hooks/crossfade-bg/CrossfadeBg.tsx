import {FunctionComponent, useEffect, useRef, useState} from 'react';
import {classNames} from '@kozakl/utils';
import {ResponsiveImage} from '../../components/responsive-image';
import React from 'react';
import style from './CrossfadeBg.pcss';

export const CrossfadeBg:FunctionComponent<Props> = (props)=>
{
    const [current, setCurrent] = useState(0),
          [next, setNext] = useState(null),
          [loadedNext, setLoadedNext] = useState(null);
    var nextDelay:number;
    var swapDelay:number;
    
    useEffect(()=> {
     
        window.setTimeout(()=>
            setNext((current + 1) % props.images.length), 1000);
    }, [current, next]);
    
    function onLoadNext()
    {
        setLoadedNext(true);
        swapDelay = window.setTimeout(()=> {
            setCurrent(next);
            swapDelay = window.setTimeout(()=>
                setNext(null), 1000);
        }, 1500);
    }
    
    const nextClass = classNames(
        style.next,
        loadedNext && style.show
    );
    return (
        <div className={props.className}>
            <ResponsiveImage
                className={style.current}
                ratio={1280 / 1920}
                thumb={`${props.images[current]}/thumb.jpg`}
                srcSet={`${props.images[current]}/992w.jpg 661w,
                         ${props.images[current]}/1200w.jpg 960w,
                         ${props.images[current]}/1366w.jpg 1366w,
                         ${props.images[current]}/1920w.jpg 1920w`}/>
            {props.images[next] &&
                <ResponsiveImage
                    className={nextClass}
                    ratio={1280 / 1920}
                    thumb={`${props.images[next]}/thumb.jpg`}
                    srcSet={`${props.images[next]}/992w.jpg 661w,
                             ${props.images[next]}/1200w.jpg 960w,
                             ${props.images[next]}/1366w.jpg 1366w,
                             ${props.images[next]}/1920w.jpg 1920w`}
                    onLoadThumb={onLoadNext}/>}
        </div>
    );
};

interface Props {
    className?:string;
    images:string[];
}
