import {AnimationEvent, CSSProperties,
        FunctionComponent, memo, MouseEvent,
        PropsWithChildren, TransitionEvent,
        useEffect, useRef, useState} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Image.module.css';

const Image:FunctionComponent<Props> = memo((props)=> {
    const img = useRef<HTMLImageElement>();
    const [prevRatio, setPrevRatio] = useState(props.ratio),
          [prevThumb, setPrevThumb] = useState(null),
          [loadedThumb, setLoadedThumb] = useState(false);
    
    if (props.thumb != prevThumb) {
        setPrevThumb(props.thumb);
        setLoadedThumb(false);
    }
    
    useEffect(()=> {
        let timeout:NodeJS.Timeout;
        if (img.current.complete) {
            timeout = setTimeout(()=>
                onLoadThumb(), 75);
        }
        return ()=> {
            clearTimeout(timeout);
        }
    }, []);
    
    function onLoadThumb() {
        if (!loadedThumb) {
            if (props.onLoadThumb) {
                props.onLoadThumb();
            }
            setLoadedThumb(true);
        }
        setPrevRatio(props.ratio);
    }
    
    return (
        <div
            className={classNames(
                style.image,
                props.className
            )}
            id={props.id}
            style={props.style}
            onClick={props.onClick}
            onAnimationEnd={props.onAnimationEnd}
            onTransitionEnd={props.onTransitionEnd}>
            <div
                className={style.wrapper}
                style={{paddingTop: `${props.ratio * 100}%`}}>
                <img
                    className={style.img}
                    ref={img}
                    src={props.thumb}
                    srcSet={loadedThumb ? props.srcSet : ''}
                    sizes={loadedThumb ? props.sizes : ''}
                    style={{visibility: !loadedThumb &&
                        (prevRatio != props.ratio ||
                            props.cleanBetween) ?
                        'hidden' : 'visible'}}
                    alt={props.alt}
                    loading={props.loading}
                    onLoad={onLoadThumb}/>
                {props.children}
            </div>
        </div>
    );
});

Image.defaultProps = {
    ratio: 1
};

interface Props extends PropsWithChildren<{}> {
    className?:string;
    id?:string;
    ratio?:number;
    thumb:string;
    srcSet:string;
    sizes?:string;
    style?:CSSProperties;
    alt?:string;
    loading?:'lazy' | 'eager';
    cleanBetween?:boolean;
    onClick?:(event:MouseEvent<HTMLDivElement>)=> void;
    onAnimationEnd?:(event:AnimationEvent<HTMLImageElement>)=> void;
    onTransitionEnd?:(event:TransitionEvent<HTMLImageElement>)=> void;
    onLoadThumb?:()=> void;
}

export default Image;
