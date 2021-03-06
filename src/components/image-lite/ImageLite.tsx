import {CSSProperties, FunctionComponent,
        memo, MouseEvent, useState} from 'react';
import React from 'react';

const ImageLite:FunctionComponent<Props> = memo((props)=>
{
    const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=';
    const [init, setInit] = useState(false),
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
    }
    
    return (
        <img
            className={props.className}
            id={props.id}
            style={{
                ...props.style,
                visibility: 
                    !loadedThumb && props.cleanBetween ?
                        'hidden' : 'visible'}}
            src={init ? props.thumb : placeholder}
            srcSet={loadedThumb ? props.srcSet : ''}
            sizes={loadedThumb ? props.sizes : ''}
            alt={props.alt}
            loading={props.loading}
            onClick={props.onClick}
            onLoad={onLoadThumb}/>
    );
});

ImageLite.defaultProps = {
    alt: ''
};

interface Props {
    className?:string;
    id?:string;
    style?:CSSProperties;
    thumb:string;
    srcSet:string;
    sizes?:string;
    alt?:string;
    loading?:'lazy' | 'eager';
    cleanBetween?:boolean;
    onClick?:(event:MouseEvent<HTMLDivElement>)=> void;
    onLoadThumb?:()=> void;
}

export default ImageLite;
