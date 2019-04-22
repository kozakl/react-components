import {FunctionComponent, useState} from 'react';
import React from 'react';
import style from './ResponsiveImage.pcss';

const empty = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=';

const ResponsiveImage:FunctionComponent<Props> = React.memo((props)=>
{
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
        <div className={props.className} id={props.id}>
            <div className={style.wrapper}
                 style={{'paddingTop': `${props.ratio * 100}%`}}>
                <img
                    className={style.image}
                    src={init ? props.thumb : empty}
                    srcSet={loadedThumb ? props.srcSet : ''}
                    sizes={loadedThumb ? props.sizes : ''}
                    onLoad={onLoadThumb}/>
            </div>
        </div>
    );
});

ResponsiveImage.defaultProps = {
    ratio: 1
};

interface Props {
    className?:string;
    id?:string;
    ratio?:number;
    thumb:string;
    srcSet:string;
    sizes?:string;
    onLoadThumb?:()=> void;
}

export default ResponsiveImage;
