import {FunctionComponent,
        useEffect, useRef, useState} from 'react';
import {useVisibility} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {ResponsiveImage} from '../responsive-image/index';
import React from 'react';
import style from './CrossfadeBg.pcss';

let swapDelay:number;

export const CrossfadeBg:FunctionComponent<Props> = (props)=>
{
    const [current, setCurrent] = useState(0),
          [next, setNext] = useState(null),
          [loadedNext, setLoadedNext] = useState(null);
    const visibility = useVisibility();
    
    useTimeout(()=> {
        setNext((current + 1) % props.images.length);
    }, visibility && 5000, current);
    
    function onLoadNext()
    {
        setLoadedNext(true);
        swapDelay = window.setTimeout(()=> {
            setCurrent(next);
            swapDelay = window.setTimeout(()=> {
                setNext(null);
                setLoadedNext(false);
            }, 1000);
        }, 1500);
    }
    
    useEffect(()=> {
        
        return ()=> {
            console.log(swapDelay);
            clearTimeout(swapDelay);
        }
    }, []);
    
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

function useTimeout(callback:Function, timeout?:number,
                                       ...deps:any) {
    const lastCallback = useRef<Function>();
    useEffect(()=> {
        lastCallback.current = callback;
    }, [callback]);
    
    useEffect(()=> {
        function onInterval() {
            lastCallback.current();
        }
        if (timeout) {
            let interval = setTimeout(onInterval, timeout);
            return ()=>
                clearTimeout(interval);
        }
    }, [timeout, ...deps]);
}
