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
    const [load, setLoad] = useState(true),
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
                        srcSet={`${path}/480w.jpg 480w,
                                 ${path}/512w.jpg 512w,
                                 ${path}/768w.jpg 768w,
                                 ${path}/960w-2x.jpg 960w,
                                 ${path}/1024w-2x.jpg 1024w,
                                 ${path}/1536w-2x.jpg 1536w`}
                        sizes="(min-width: 1024px) 33vw,
                               (min-width: 768px) 50vw,
                               100vw"/>
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
