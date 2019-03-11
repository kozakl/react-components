import {FunctionComponent, useState} from 'react';
import {scaleDown} from '@kozakl/utils';
import {ResponsiveImage} from '../../components/responsive-image';
import {Image} from '../../types';
import React from 'react';
import style from './ImagePreview.pcss';

const ImagePreview:FunctionComponent<Props> = (props)=>
{
    const [current, setCurrent] = useState(props.current);
    
    function onClickPrev() {
        if (current > 0)
            setCurrent(current - 1);
        else
            setCurrent(props.images.length - 1);
    }
    
    function onClickNext() {
        if (current < props.images.length - 1)
            setCurrent(current + 1);
        else 
            setCurrent(0);
    }
    
    const image = props.images[current];
    const scale = scaleDown(
        image.width / image.height,
        window.innerWidth,
        window.innerHeight
    );
    return (
        <div className={style.imagePreview} style={{width: `${scale.x * 0.85}px`}}>
            <a className={style.close} onClick={props.onClose}>
                <img src={require('res/icons/close.svg')}/>
            </a>
            <div className={style.imageContainer}>
                <ResponsiveImage
                    ratio={image.height / image.width}
                    thumb={`${image.path}/thumb.jpg`}
                    srcSet={`${image.path}/425w.jpg 425w,
                             ${image.path}/768w.jpg 768w,
                             ${image.path}/1024w.jpg 1024w,
                             ${image.path}/1440w.jpg 1440w,
                             ${image.path}/1920w.jpg 1920w`}
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

interface Props {
    images:Image[];
    current:number;
    onClose?:()=> void;
}

export default ImagePreview;
