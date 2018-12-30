import {Carousel} from '../../components/carousel';
import React from 'react';
import style from './CarouselSample.pcss';

export default function CarouselSample()
{
    return (
        <div className={style.carouselSample}>
            <Carousel className={style.carousel}>
                <div>A</div>
                <div>B</div>
                <div>C</div>
            </Carousel>
        </div>
    );
}
