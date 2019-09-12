import {FunctionComponent,
        memo, useState} from 'react';
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
            src={init ? props.thumb : placeholder}
            id={props.id}
            srcSet={loadedThumb ? props.srcSet : ''}
            sizes={loadedThumb ? props.sizes : ''}
            onLoad={onLoadThumb}/>
    );
});

interface Props {
    className?:string;
    id?:string;
    thumb:string;
    srcSet:string;
    sizes?:string;
    onLoadThumb?:()=> void;
}

export default ImageLite;
