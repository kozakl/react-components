import {Carousel} from '../../components/carousel';
import {Image} from '../../components/image';
import React from 'react';
import style from './CarouselSample.pcss';

export default function CarouselSample()
{
    return (
        <div className={style.carouselSample}>
            <Carousel>
                <div className={style.item}>A</div>
                <div className={style.item}>B</div>
                <div className={style.item}>C</div>
            </Carousel>
            
            <Carousel>
                <div className={style.card}>
                    <Image
                        className={style.cardImage}
                        thumb={`assets/cards/image1/thumb.jpg`}
                        srcSet={`assets/cards/image1/800w.jpg 800w`}/>
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
                    <Image
                        className={style.cardImage}
                        thumb={`assets/cards/image2/thumb.jpg`}
                        srcSet={`assets/cards/image2/800w.jpg 800w`}/>
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
                    <Image
                        className={style.cardImage}
                        thumb={`assets/cards/image3/thumb.jpg`}
                        srcSet={`assets/cards/image3/800w.jpg 800w`}/>
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
                    <Image
                        className={style.cardImage}
                        thumb={`assets/cards/image4/thumb.jpg`}
                        srcSet={`assets/cards/image4/800w.jpg 800w`}/>
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
