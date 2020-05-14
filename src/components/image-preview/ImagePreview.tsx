import {FunctionComponent, useState} from 'react';
import {scaleDown} from '@kozakl/utils';
import {Image} from '../image';
import {Spinner} from '../spinner';
import React from 'react';
import style from './ImagePreview.pcss';

const ImagePreview:FunctionComponent<Props> = (props)=>
{
    const [current, setCurrent] = useState(props.current),
          [loadedThumb, setLoadedThumb] = useState(false);
    
    function onClickPrev() {
        const images = props.images;
        setCurrent((current - 1 + images.length) % images.length);
        setLoadedThumb(false);
    }
    
    function onClickNext() {
        const images = props.images;
        setCurrent((current + 1) % images.length);
        setLoadedThumb(false);
    }
    
    const image = props.images[current];
    const scale = scaleDown(
        image.width / image.height,
        window.innerWidth,
        window.innerHeight
    );
    return (
        <div
            className={style.imagePreview}
            style={{width: `${scale.x * (window.innerWidth > 768 ? 0.85 : 0.92)}px`}}>
            <a className={style.close} onClick={props.onClose}>
                <img src={require('res/icons/close.svg')}/>
            </a>
            <div className={style.container}>
                {!loadedThumb &&
                    <Spinner
                        className={style.spinner}
                        size="4em"/>}
                <Image
                    ratio={image.height / image.width}
                    thumb={`${image.url}/thumb.jpg`}
                    srcSet={`${image.url}/800w.jpg 800w`}
                    onLoadThumb={()=>
                        setLoadedThumb(true)}
                    sizes="85vw"/>
                <div className={style.arrows}>
                    <a className={style.prev} onClick={onClickPrev}>
                        <img src={require('res/icons/prev.svg')}/>
                    </a>
                    <a className={style.next} onClick={onClickNext}>
                        <img src={require('res/icons/next.svg')}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

ImagePreview.defaultProps = {
    current: 0
};

interface Props {
    images: {
        url:string;
        width:number;
        height:number;
    }[];
    current?:number;
    onClose?:()=> void;
}

export default ImagePreview;
