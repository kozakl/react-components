import {CarouselSlider} from '@kozakl/components/carousel-slider';
import {ChevronLeft, ChevronRight} from '@kozakl/components/icons';
import {Image} from '@kozakl/components/image';
import {ImageLite} from '@kozakl/components/image-lite';
import {Layout} from '../../components/layout';
import style from './Carousel.module.css';
import React from 'react';

const Main = ()=> {
    return (
        <Layout title="Carousel Slider - React Components">
            <div className={style.main}>
                <CarouselSlider
                    className={style.carousel1}
                    dots>
                    <div className={style.item}>A</div>
                    <div className={style.item}>B</div>
                    <div className={style.item}>C</div>
                </CarouselSlider>
                
                <CarouselSlider
                    className={style.carousel2}
                    dots>
                    <div className={style.item}>
                        <Image
                            thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                            srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
                        <div className={style.container}>
                            <div className={style.title}>
                                <h3>Decyzja kredytowa przed podpisaniem umowy zakupy</h3>
                            </div>
                            <p className={style.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <Image
                            thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                            srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
                        <div className={style.container}>
                            <div className={style.title}>
                                <h3>Ubezpieczenie na 5 lat</h3>
                            </div>
                            <p className={style.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <Image
                            thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                            srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
                        <div className={style.container}>
                            <div className={style.title}>
                                <h3>Unikatowy projekt wnętrz</h3>
                            </div>
                            <p className={style.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <Image
                            thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                            srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
                        <div className={style.container}>
                            <div className={style.title}>
                                <h3>Voucher na zakupy w Leroy Merlin</h3>
                            </div>
                            <p className={style.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </CarouselSlider>
                
                <CarouselSlider
                    className={style.carousel3}
                    arrows
                    dots
                    iconPrev={()=>
                        <ChevronLeft
                            colorPrimary="var(--color-secondary)"
                            colorSecondary="var(--color-primary)"
                            stroke={2}
                            strokeLinecap="round"
                            outline={3}/>}
                    iconNext={()=>
                        <ChevronRight
                            colorPrimary="var(--color-secondary)"
                            colorSecondary="var(--color-primary)"
                            stroke={2}
                            strokeLinecap="round"
                            outline={3}/>}>
                    <div className={style.slide}>
                        <div className={style.background}>
                            <ImageLite
                                thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                                srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
                        </div>
                        <p className={style.text}>
                            <h2>Voucher na zakupy w Leroy Merlin</h2>
                        </p>
                    </div>
                    <div className={style.slide}>
                        <div className={style.background}>
                            <ImageLite
                                thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                                srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
                        </div>
                        <p className={style.text}>
                            <h2>Voucher na zakupy w Leroy Merlin</h2>
                        </p>
                    </div>
                    <div className={style.slide}>
                        <div className={style.background}>
                            <ImageLite
                                thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                                srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
                        </div>
                        <p className={style.text}>
                            <h2>Voucher na zakupy w Leroy Merlin</h2>
                        </p>
                    </div>
                    <div className={style.slide}>
                        <div className={style.background}>
                            <ImageLite
                                thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                                srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
                        </div>
                        <p className={style.text}>
                            <h2>Voucher na zakupy w Leroy Merlin</h2>
                        </p>
                    </div>
                </CarouselSlider>
            </div>
        </Layout>
    );
};

export default Main;
