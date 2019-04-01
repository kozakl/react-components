import {FunctionComponent, useEffect, useRef, useState} from 'react';
import {classNames} from '@kozakl/utils';
import {ResponsiveImage} from '../../components/responsive-image';
import React from 'react';
import style from './CrossfadeBg.pcss';

const CrossfadeBg:FunctionComponent<Props> = (props)=>
{
    const [current, setCurrent] = useState(0),
          [next, setNext] = useState(null),
          [loadedNext, setLoadedNext] = useState(null);
    
    const images = [
        'assets/bg1/', 'assets/bg2/'
    ];
    var nextDelay:number;
    var swapDelay:number;
    
    
    useEffect(()=> {
     
        window.setTimeout(()=>
            setNext((current + 1) % images.length), 1000);
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
                thumb={`${images[current]}/thumb.jpg`}
                srcSet={`${images[current]}/992w.jpg 661w,
                         ${images[current]}/1200w.jpg 960w,
                         ${images[current]}/1366w.jpg 1366w,
                         ${images[current]}/1920w.jpg 1920w`}/>
            {images[next] &&
                <ResponsiveImage
                    className={nextClass}
                    ratio={1280 / 1920}
                    thumb={`${images[next]}/thumb.jpg`}
                    srcSet={`${images[next]}/992w.jpg 661w,
                             ${images[next]}/1200w.jpg 960w,
                             ${images[next]}/1366w.jpg 1366w,
                             ${images[next]}/1920w.jpg 1920w`}
                    onLoadThumb={onLoadNext}/>}
        </div>
    );
};

export default CrossfadeBg;

interface Props {
    className?:string;
}
