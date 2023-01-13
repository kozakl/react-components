import {Carousel} from '@kozakl/components/carousel';
import {Image} from '@kozakl/components/image';
import {Layout} from '../../components/layout';
import style from './Carousel.module.css';

const Index = ()=> {
    return (
        <Layout title="Carousel - React Components">
            <div className={style.index}>
                <Carousel className={style.carousel1}>
                    <div className={style.item}>A</div>
                    <div className={style.item}>B</div>
                    <div className={style.item}>C</div>
                </Carousel>
                {/*
                <Carousel>
                    <div className={style.card}>
                        <Image
                            className={style.cardImage}
                            thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                            srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
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
                            thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                            srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
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
                            thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                            srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
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
                            thumb={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg`}
                            srcSet={`https://eu2allwebext.blob.core.windows.net/suburbansquare/www/resources/images/pages/default/i_home_about.jpg 800w`}/>
                        <div className={style.cardBody}>
                            <div className={style.cardTitle}>
                                <h3>Voucher na zakupy w Leroy Merlin</h3>
                            </div>
                            <p className={style.cardText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </Carousel>*/}
            </div>
        </Layout>
    );
};

export default Index;
