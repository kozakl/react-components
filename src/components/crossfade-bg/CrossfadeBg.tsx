import {FunctionComponent,
        useEffect, useState} from 'react';
import {useTimeout, useVisibility} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {ResponsiveImage} from '../responsive-image/index';
import React from 'react';
import style from './CrossfadeBg.pcss';

const CrossfadeBg:FunctionComponent<Props> = (props)=>
{
    const visibility = useVisibility();
    const [current, setCurrent] = useState(0),
          [next, setNext] = useState(null),
          [loadedNext, setLoadedNext] = useState(null);
    
    useTimeout(()=> {
        setNext((current + 1) % props.images.length);
    }, visibility && 5000, current);
    
    useEffect(()=> {
        if (loadedNext) {
            let delay = window.setTimeout(()=> {
                setCurrent(next);
                delay = window.setTimeout(()=> {
                    setNext(null);
                    setLoadedNext(false);
                }, 1000);
            }, 1500);
            return ()=>
                clearTimeout(delay);
        }
    }, [loadedNext]);
    
    const crossfadeBgClass = classNames(
        style.crossfadeBg,
        props.className,
    );
    const nextClass = classNames(
        style.next,
        loadedNext && style.show
    );
    return (
        <div className={crossfadeBgClass}>
            <ResponsiveImage
                className={style.current}
                ratio={1080 / 1920}
                thumb={`${props.images[current]}/thumb.jpg`}
                srcSet={`${props.images[current]}/960w.jpg 576w,
                         ${props.images[current]}/1440w.jpg 1440w,
                         ${props.images[current]}/1920w.jpg 1920w`}/>
            {props.images[next] &&
                <ResponsiveImage
                    className={nextClass}
                    ratio={1080 / 1920}
                    thumb={`${props.images[next]}/thumb.jpg`}
                    srcSet={`${props.images[next]}/960w.jpg 576w,
                             ${props.images[next]}/1440w.jpg 1440w,
                             ${props.images[next]}/1920w.jpg 1920w`}
                    onLoadThumb={()=> setLoadedNext(true)}/>}
        </div>
    );
};

interface Props {
    className?:string;
    images:string[];
}

export default CrossfadeBg;
