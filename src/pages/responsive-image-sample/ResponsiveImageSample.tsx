import {useState} from 'react';
import {ResponsiveImage} from '../../components/responsive-image';
import React from 'react';
import style from './ResponsiveImageSample.pcss';

export default function ResponsiveImageSample()
{
    const images:Images = {
        'assets/room1/': {width: 4104, height: 2310},
        'assets/room2/': {width: 1200, height: 900}
    };
    const [load, setLoad] = useState(false),
          [path, setPath] = useState('assets/room1/');
    
    function onClickNext() {
        if (path === 'assets/room1/')
            setPath('assets/room2/');
        else {
            setPath('assets/room1/');
        }
    }
    
    return (
        <div className={style.responsiveImageSample}>
            <button onClick={()=> setLoad(true)}>
                Load
            </button>
            <button
                onClick={onClickNext}>
                Next
            </button>
            {load && 
                <div>
                    <ResponsiveImage
                        className={style.image}
                        ratio={images[path].height /
                               images[path].width}
                        thumb={`${path}/thumb.jpg`}
                        srcSet={`${path}/700w.jpg 700w,
                                 ${path}/525w.jpg 525w,
                                 ${path}/400w.jpg 400w,
                                 ${path}/1400w-2x.jpg 1400w`}
                        sizes="(max-width: 700px) 700px,
                               (max-width: 1050px) 525px,
                               400px"/>
                </div>}
        </div>
    );
}

interface Images {
    [key:string]: {
        width:number;
        height:number;
    }
}
