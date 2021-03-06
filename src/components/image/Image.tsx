import {CSSProperties, FunctionComponent,
        memo, MouseEvent, useState} from 'react';
import React from 'react';
import style from './Image.pcss';

const Image:FunctionComponent<Props> = memo((props)=>
{
    const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=';
    const [init, setInit] = useState(false),
          [prevRatio, setPrevRatio] = useState(props.ratio),
          [prevThumb, setPrevThumb] = useState(null),
          [loadedThumb, setLoadedThumb] = useState(false);
    
    if (props.thumb !== prevThumb) {
        setPrevThumb(props.thumb);
        setLoadedThumb(false);
    }
    
    function onLoadThumb() {
        if (!init) {
            setInit(true);
        } else if (!loadedThumb) {
            if (props.onLoadThumb) {
                props.onLoadThumb();
            }
            setLoadedThumb(true);
        }
        setPrevRatio(props.ratio);
    }
    
    return (
        <div
            className={props.className}
            id={props.id}
            style={props.style}
            onClick={props.onClick}>
            <div className={style.wrapper}
                 style={{paddingTop: `${props.ratio * 100}%`}}>
                <img
                    className={style.img}
                    style={{visibility:
                            !loadedThumb &&
                                (prevRatio !== props.ratio ||
                                    props.cleanBetween) ?
                                'hidden' : 'visible'}}
                    src={init ? props.thumb : placeholder}
                    srcSet={loadedThumb ? props.srcSet : ''}
                    sizes={loadedThumb ? props.sizes : ''}
                    loading={props.loading}
                    onLoad={onLoadThumb}/>
            </div>
        </div>
    );
});

Image.defaultProps = {
    ratio: 1
};

interface Props {
    className?:string;
    id?:string;
    style?:CSSProperties;
    ratio?:number;
    thumb:string;
    srcSet:string;
    sizes?:string;
    loading?:'lazy' | 'eager';
    cleanBetween?:boolean;
    onClick?:(event:MouseEvent<HTMLDivElement>)=> void;
    onLoadThumb?:()=> void;
}

export default Image;
