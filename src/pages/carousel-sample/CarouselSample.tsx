import {Carousel} from '../../components/carousel';
import {ResponsiveImage} from '../../components/responsive-image';
import React from 'react';
import style from './CarouselSample.pcss';

export default function CarouselSample()
{
    return (
        <div className={style.carouselSample}>
            <Carousel className={style.carousel}>
                <div className={style.item}>A</div>
                <div className={style.item}>B</div>
                <div className={style.item}>C</div>
            </Carousel>
            
            <Carousel className={style.cards}>
                <div className={style.card}>
                    <ResponsiveImage
                        className={style.cardImage}
                        thumb={`assets/cards/card1/thumb.jpg`}
                        srcSet={`assets/cards/card1/800w.jpg 800w`}/>
                    <div className={style.cardBody}>
                        <div className={style.cardTitle}>
                            <h3>Decyzja kredytowa przed podpisaniem umowy zakupy</h3>
                        </div>
                        <p className={style.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                
                <div className={style.card}>
                    <ResponsiveImage
                        className={style.cardImage}
                        thumb={`assets/cards/card2/thumb.jpg`}
                        srcSet={`assets/cards/card2/800w.jpg 800w`}/>
                    <div className={style.cardBody}>
                        <div className={style.cardTitle}>
                            <h3>Ubezpieczenie na 5 lat</h3>
                        </div>
                        <p className={style.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                
                <div className={style.card}>
                    <ResponsiveImage
                        className={style.cardImage}
                        thumb={`assets/cards/card3/thumb.jpg`}
                        srcSet={`assets/cards/card3/800w.jpg 800w`}/>
                    <div className={style.cardBody}>
                        <div className={style.cardTitle}>
                            <h3>Unikatowy projekt wnętrz</h3>
                        </div>
                        <p className={style.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                
                <div className={style.card}>
                    <ResponsiveImage
                        className={style.cardImage}
                        thumb={`assets/cards/card4/thumb.jpg`}
                        srcSet={`assets/cards/card4/800w.jpg 800w`}/>
                    <div className={style.cardBody}>
                        <div className={style.cardTitle}>
                            <h3>Voucher na zakupy w Leroy Merlin</h3>
                        </div>
                        <p className={style.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
