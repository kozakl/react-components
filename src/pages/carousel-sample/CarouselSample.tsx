import {Carousel} from '../../components/carousel';
import React from 'react';
import style from './CarouselSample.pcss';

export default function CarouselSample()
{
    return (
        <Carousel className={style.carousel}>
            <div className={style.item}>A</div>
            <div className={style.item}>B</div>
            <div className={style.item}>C</div>
        </Carousel>
    );
}
