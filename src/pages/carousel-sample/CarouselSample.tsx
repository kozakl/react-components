import {Carousel} from '../../components/carousel';
import React from 'react';
import style from './CarouselSample.pcss';

export default function CarouselSample()
{
    return (
        <div className={style.badgeSample}>
            <Carousel>
                <div>A</div>
                <div>B</div>
                <div>C</div>
            </Carousel>
        </div>
    );
}
